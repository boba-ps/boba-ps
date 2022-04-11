import * as InterOpType_proto from "./InterOpType"

import * as ResinCostType_proto from "./ResinCostType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 849
}

export interface GadgetInteractReq {
	gadgetEntityId?: number;
	opType?: InterOpType_proto.InterOpType;
	gadgetId?: number;
	isUseCondenseResin?: boolean;
	resinCostType?: ResinCostType_proto.ResinCostType;
}

