import * as CreateEntityInfo_proto from "./CreateEntityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 210
}

export interface SceneCreateEntityRsp {
	retcode?: number;
	entityId?: number;
	entity?: CreateEntityInfo_proto.CreateEntityInfo;
}

