import * as WidgetCoolDownData_proto from "./WidgetCoolDownData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4298
}

export interface WidgetCoolDownNotify {
	groupCoolDownDataList?: WidgetCoolDownData_proto.WidgetCoolDownData[];
	normalCoolDownDataList?: WidgetCoolDownData_proto.WidgetCoolDownData[];
}

