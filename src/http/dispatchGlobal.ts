import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import { QueryRegionListHttpRsp, RegionSimpleInfo } from "boba-protos";
import type { Config } from "../config";
import { cipherEc2b, Ec2bKey } from "../crypto";

export class GlobalDispatchHandler extends HttpHandler {
  constructor(readonly config: Config, readonly ec2b: Ec2bKey) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .get("/query_security_file", this.querySecurityFile.bind(this))
      .get("/query_region_list", this.queryRegionList.bind(this));
  }

  // query_security_file?file_key=OSRELWin2.6.0
  async querySecurityFile(_req: HttpRequest, res: HttpResponse) {
    res.status(404).send();
  }

  // query_region_list?version=OSRELWin2.6.0&lang=1&platform=3&binary=1&time=966&channel_id=1&sub_channel_id=0
  async queryRegionList(_req: HttpRequest, res: HttpResponse) {
    const region = RegionSimpleInfo.create({
      name: "os_boba",
      title: "BobaPS",
      type: "DEV_PUBLIC",
      dispatchUrl: new URL("query_cur_region", this.config.get("http.publicUrl")).href,
    });

    const regionList = QueryRegionListHttpRsp.create({
      regionList: [region],
      clientSecretKey: this.ec2b.ec2b,
      clientCustomConfigEncrypted: cipherEc2b(
        this.ec2b,
        Buffer.from(
          JSON.stringify({
            sdkenv: 2,
            checkdevice: false,
            loadPatch: false,
            showexception: false,
            regionConfig: "pm|fk|add",
            downloadMode: 0,
          }),
          "utf8"
        )
      ),
      enableLoginPc: true,
    });

    res.send(Buffer.from(QueryRegionListHttpRsp.toBinary(regionList)).toString("base64"));
  }
}
