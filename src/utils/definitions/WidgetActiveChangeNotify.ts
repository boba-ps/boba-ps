import * as WidgetSlotData_proto from "./WidgetSlotData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4264
}

export interface WidgetActiveChangeNotify {
	widgetDataList?: WidgetSlotData_proto.WidgetSlotData[];
}

