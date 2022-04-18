import {
  FriendOnlineState,
  GetPlayerBlacklistReq,
  GetPlayerBlacklistRsp,
  GetPlayerFriendListReq,
  GetPlayerFriendListRsp,
  GetPlayerSocialDetailReq,
  GetPlayerSocialDetailRsp,
} from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class SocialHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router
      .on(GetPlayerSocialDetailReq, this.getPlayerSocialDetail.bind(this))
      .on(GetPlayerFriendListReq, this.getPlayerFriendList.bind(this))
      .on(GetPlayerBlacklistReq, this.getPlayerBlacklist.bind(this));
  }

  getPlayerSocialDetail({ req, res }: PacketContext<GetPlayerSocialDetailReq>) {
    // TODO: fetch player public info
    if (req.uid === 6064) {
      res.send(GetPlayerSocialDetailRsp, {
        detailData: {
          uid: 6064,
          nickname: "Boba",
          level: 1,
          onlineState: FriendOnlineState.FRIEND_ONLINE,
          isFriend: true,
          isMpModeAvailable: true,
          nameCardId: 210001,
          finishAchievementNum: 1,
          signature: "Test booba account",
          profilePicture: {
            avatarId: 10000007,
          },
        },
      });
    } else {
      res.send(GetPlayerSocialDetailRsp, {
        retcode: 1,
      });
    }
  }

  getPlayerFriendList({ res }: PacketContext<GetPlayerFriendListReq>) {
    res.send(GetPlayerFriendListRsp, {});
  }

  getPlayerBlacklist({ res }: PacketContext<GetPlayerBlacklistReq>) {
    res.send(GetPlayerBlacklistRsp, {});
  }
}
