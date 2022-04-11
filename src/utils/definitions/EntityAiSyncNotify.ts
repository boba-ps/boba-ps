import * as AiSyncInfo_proto from "./AiSyncInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 352
}

export interface EntityAiSyncNotify {
	infoList?: AiSyncInfo_proto.AiSyncInfo[];
	localAvatarAlertedMonsterList?: number[];
}

