import { QueryCurrRegionHttpRsp, RegionInfo } from "boba-protos";
import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";
import { cipherEc2b, Ec2bKey } from "../crypto";

export class RegionDispatchHandler extends HttpHandler {
  constructor(readonly config: Config, readonly ec2b: Ec2bKey) {
    super();
  }

  setup(server: HttpsServer): void {
    server.http.get("/query_cur_region", this.queryCurrRegion.bind(this));
  }

  // query_cur_region?version=OSRELWin2.6.0&lang=1&platform=3&binary=1&time=102&channel_id=1&sub_channel_id=0&account_type=1&dispatchSeed=1e0e352db05bd0a8
  async queryCurrRegion(_req: HttpRequest, res: HttpResponse) {
    const gateserver = this.config.get("kcp.publicAddr");

    const regionInfo = RegionInfo.create({
      gateserverIp: gateserver.split(":")[0]!,
      gateserverPort: parseInt(gateserver.split(":")[1]!),
      secretKey: this.ec2b.ec2b,
    });

    const region = QueryCurrRegionHttpRsp.create({
      regionInfo,
      clientSecretKey: this.ec2b.ec2b,
      regionCustomConfigEncrypted: cipherEc2b(
        this.ec2b,
        Buffer.from(
          JSON.stringify({
            coverSwitch: [8],
            perf_report_config_url: new URL(
              "config/verify",
              this.config.get("http.publicUrl")
            ),
            perf_report_record_url: new URL(
              "dataUpload",
              this.config.get("http.publicUrl")
            ),
          })
        )
      ),
    });

    res.send(
      Buffer.from(QueryCurrRegionHttpRsp.toBinary(region)).toString("base64")
    );
  }
}
