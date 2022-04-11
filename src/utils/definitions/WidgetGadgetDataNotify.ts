import * as WidgetGadgetData_proto from "./WidgetGadgetData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4256
}

export interface WidgetGadgetDataNotify {
	widgetGadgetData?: WidgetGadgetData_proto.WidgetGadgetData;
}

