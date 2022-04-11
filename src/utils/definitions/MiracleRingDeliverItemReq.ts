import * as InterOpType_proto from "./InterOpType"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5207
}

export interface MiracleRingDeliverItemReq {
	gadgetEntityId?: number;
	opType?: InterOpType_proto.InterOpType;
	gadgetId?: number;
	foodWeaponGuidList?: number[];
	itemParamList?: ItemParam_proto.ItemParam[];
}

