import { GetPlayerTokenReq, GetPlayerTokenRsp } from "boba-protos";
import { KcpHandler, KcpServer } from "..";

export class AuthHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(GetPlayerTokenReq, (req, res, connection) => {
      const seed = 0x0n;

      res.send(GetPlayerTokenRsp, {
        accountType: req.accountType,
        accountUid: req.accountUid,
        uid: 6064,
        token: "abcdabcdabcdabcd",
        secretKeySeed: seed,
      });

      // TODO: schedule reseed on the executor
      connection.encryptor.seed(seed);
    });
  }
}
