import * as Vector_proto from "./Vector"

import * as QueryFilter_proto from "./QueryFilter"

import * as Vector3Int_proto from "./Vector3Int"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2349
}

export enum OptionType {
	OPTION_NONE = 0,
	OPTION_NORMAL = 1,
	OPTION_FIRST_CAN_GO = 2
}

export interface QueryPathReq {
	queryType?: OptionType;
	queryId?: number;
	sceneId?: number;
	sourcePos?: Vector_proto.Vector;
	destinationPos?: Vector_proto.Vector[];
	filter?: QueryFilter_proto.QueryFilter;
	destinationExtend?: Vector3Int_proto.Vector3Int;
	sourceExtend?: Vector3Int_proto.Vector3Int;
}

