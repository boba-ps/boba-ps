import * as Vector_proto from "./Vector"

import * as EnterType_proto from "./EnterType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 249
}

export interface PlayerEnterSceneNotify {
	sceneId?: number;
	pos?: Vector_proto.Vector;
	sceneBeginTime?: number;
	type?: EnterType_proto.EnterType;
	targetUid?: number;
	prevSceneId?: number;
	prevPos?: Vector_proto.Vector;
	dungeonId?: number;
	worldLevel?: number;
	enterSceneToken?: number;
	isFirstLoginEnterScene?: boolean;
	sceneTagIdList?: number[];
	isSkipUi?: boolean;
	enterReason?: number;
	worldType?: number;
	sceneTransaction?: string;
}

