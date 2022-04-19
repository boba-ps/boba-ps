import { PingReq, PingRsp } from "boba-protos";
import { KcpHandler, KcpServer } from "..";

export class PingHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(PingReq, ({ req, res }) => {
      res.send(PingRsp, {
        clientTime: req.clientTime,
      });
    });
  }
}
