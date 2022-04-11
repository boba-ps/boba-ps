import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 207
}

export interface BeginCameraSceneLookNotify {
	lookPos?: Vector_proto.Vector;
	duration?: number;
	isForce?: boolean;
	isRecoverKeepCurrent?: boolean;
	isAllowInput?: boolean;
	isSetFollowPos?: boolean;
	followPos?: Vector_proto.Vector;
	isForceWalk?: boolean;
	isChangePlayMode?: boolean;
	screenX?: number;
	screenY?: number;
	isSetScreenXY?: boolean;
	otherParams?: string[];
}

