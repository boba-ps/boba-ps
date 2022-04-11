import * as SceneEntityInfo_proto from "./SceneEntityInfo"

import * as VisionType_proto from "./VisionType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 201
}

export interface SceneEntityAppearNotify {
	entityList?: SceneEntityInfo_proto.SceneEntityInfo[];
	appearType?: VisionType_proto.VisionType;
	param?: number;
}

