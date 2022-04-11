import * as WidgetCreateLocationInfo_proto from "./WidgetCreateLocationInfo"

import * as WidgetCreatorInfo_proto from "./WidgetCreatorInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4290
}

export interface WidgetDoBagReq {
	locationInfo?: WidgetCreateLocationInfo_proto.WidgetCreateLocationInfo;
	widgetCreatorInfo?: WidgetCreatorInfo_proto.WidgetCreatorInfo;
	materialId?: number;
}

