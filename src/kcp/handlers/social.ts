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

  getPlayerSocialDetail({ res }: PacketContext<GetPlayerSocialDetailReq>) {
      res.send(GetPlayerSocialDetailRsp, {
        detailData: {
          uid: 69420,
          nickname: "BobaGM",
          level: 60,
          onlineState: FriendOnlineState.FRIEND_ONLINE,
          isFriend: true,
          isMpModeAvailable: true,
          nameCardId: 210001,
          finishAchievementNum: 1,
          signature: "BobaGM Bot",
          profilePicture: {
            avatarId: 10000007,
          },
        },
      });
    }

  getPlayerFriendList({ res }: PacketContext<GetPlayerFriendListReq>) {
    res.send(GetPlayerFriendListRsp, {});
  }

  getPlayerBlacklist({ res }: PacketContext<GetPlayerBlacklistReq>) {
    res.send(GetPlayerBlacklistRsp, {});
  }
}
