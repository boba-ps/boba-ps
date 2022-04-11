import * as PushTipsData_proto from "./PushTipsData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2247
}

export interface PushTipsAllDataNotify {
	pushTipsList?: PushTipsData_proto.PushTipsData[];
}
