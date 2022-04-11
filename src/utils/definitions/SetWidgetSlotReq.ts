import * as WidgetSlotOp_proto from "./WidgetSlotOp"

import * as WidgetSlotTag_proto from "./WidgetSlotTag"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4269
}

export interface SetWidgetSlotReq {
	op?: WidgetSlotOp_proto.WidgetSlotOp;
	tagList?: WidgetSlotTag_proto.WidgetSlotTag[];
	materialId?: number;
}

