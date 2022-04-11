import * as SceneEntityInfo_proto from "./SceneEntityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1724
}

export interface AvatarChangeCostumeNotify {
	entityInfo?: SceneEntityInfo_proto.SceneEntityInfo;
}

