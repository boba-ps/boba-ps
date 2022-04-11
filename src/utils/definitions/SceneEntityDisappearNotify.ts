import * as VisionType_proto from "./VisionType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 294
}

export interface SceneEntityDisappearNotify {
	entityList?: number[];
	disappearType?: VisionType_proto.VisionType;
}

