import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3484
}

export interface HitTreeNotify {
	treeType?: number;
	treePos?: Vector_proto.Vector;
	dropPos?: Vector_proto.Vector;
}

