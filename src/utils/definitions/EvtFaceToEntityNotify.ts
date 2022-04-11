import * as ForwardType_proto from "./ForwardType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 394
}

export interface EvtFaceToEntityNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	faceEntityId?: number;
}

