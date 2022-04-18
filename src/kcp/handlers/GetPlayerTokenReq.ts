import { GetPlayerTokenReq, GetPlayerTokenRsp } from 'boba-protos';
import { KcpHandler, KcpServer } from '..';
import { Log } from '../../log';

export class GetPlayerTokenReqHandler extends KcpHandler {
  protected setup(server:KcpServer) {
    server.router.on(GetPlayerTokenReq, (req, res) => {
      Log.info('Got GetPlayerTokenReq!');
      // To Do: Handle for multiple platforms
    });
  }
}
