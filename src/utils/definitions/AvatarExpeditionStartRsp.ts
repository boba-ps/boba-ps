import * as AvatarExpeditionInfo_proto from "./AvatarExpeditionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1646
}

export interface AvatarExpeditionStartRsp {
	retcode?: number;
	expeditionInfoMap?: AvatarExpeditionInfo_proto.AvatarExpeditionInfo;
}
