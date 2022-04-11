import * as WidgetSlotOp_proto from "./WidgetSlotOp"

import * as WidgetSlotTag_proto from "./WidgetSlotTag"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4279
}

export interface SetWidgetSlotRsp {
	retcode?: number;
	op?: WidgetSlotOp_proto.WidgetSlotOp;
	tagList?: WidgetSlotTag_proto.WidgetSlotTag[];
	materialId?: number;
}

