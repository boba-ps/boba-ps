import * as WidgetSlotOp_proto from "./WidgetSlotOp"

import * as WidgetSlotData_proto from "./WidgetSlotData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4289
}

export interface WidgetSlotChangeNotify {
	op?: WidgetSlotOp_proto.WidgetSlotOp;
	slot?: WidgetSlotData_proto.WidgetSlotData;
}

