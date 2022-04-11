import * as InteractType_proto from "./InteractType"

import * as InterOpType_proto from "./InterOpType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 818
}

export interface GadgetInteractRsp {
	retcode?: number;
	gadgetEntityId?: number;
	interactType?: InteractType_proto.InteractType;
	opType?: InterOpType_proto.InterOpType;
	gadgetId?: number;
}

