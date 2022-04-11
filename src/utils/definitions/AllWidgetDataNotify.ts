import * as AnchorPointData_proto from "./AnchorPointData"

import * as LunchBoxData_proto from "./LunchBoxData"

import * as OneoffGatherPointDetectorData_proto from "./OneoffGatherPointDetectorData"

import * as ClientCollectorData_proto from "./ClientCollectorData"

import * as WidgetCoolDownData_proto from "./WidgetCoolDownData"

import * as WidgetSlotData_proto from "./WidgetSlotData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4260
}

export interface AllWidgetDataNotify {
	anchorPointList?: AnchorPointData_proto.AnchorPointData[];
	nextAnchorPointUsableTime?: number;
	lunchBoxData?: LunchBoxData_proto.LunchBoxData;
	oneoffGatherPointDetectorDataList?: OneoffGatherPointDetectorData_proto.OneoffGatherPointDetectorData[];
	clientCollectorDataList?: ClientCollectorData_proto.ClientCollectorData[];
	coolDownGroupDataList?: WidgetCoolDownData_proto.WidgetCoolDownData[];
	normalCoolDownDataList?: WidgetCoolDownData_proto.WidgetCoolDownData[];
	slotList?: WidgetSlotData_proto.WidgetSlotData[];
}

