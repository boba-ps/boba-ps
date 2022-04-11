import * as CreateEntityInfo_proto from "./CreateEntityInfo"

import * as CreateReason_proto from "./CreateReason"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 280
}

export interface SceneCreateEntityReq {
	entity?: CreateEntityInfo_proto.CreateEntityInfo;
	reason?: CreateReason_proto.CreateReason;
	isDestroyWhenDisconnect?: boolean;
}

