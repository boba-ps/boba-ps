import { KcpHandler, KcpServer } from "..";
import { PingReq } from "boba-protos";
import { Log } from "../../log";

export class PingReqHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(PingReq, (req) => {
      Log.info({ req }, "ping req received!");
    });
  }
}
