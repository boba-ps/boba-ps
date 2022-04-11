import * as LunaRiteHintPoint_proto from "./LunaRiteHintPoint"

import * as LunaRiteHintStatusType_proto from "./LunaRiteHintStatusType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 8336
}

export interface LunaRiteHintPointRsp {
	retcode?: number;
	areaId?: number;
	hintPoint?: LunaRiteHintPoint_proto.LunaRiteHintPoint[];
	hintStatus?: LunaRiteHintStatusType_proto.LunaRiteHintStatusType;
}

