import * as WidgetCreatorOpType_proto from "./WidgetCreatorOpType"

import * as WidgetCreateLocationInfo_proto from "./WidgetCreateLocationInfo"

export interface WidgetCreatorInfo {
	opType?: WidgetCreatorOpType_proto.WidgetCreatorOpType;
	entityId?: number;
	locationInfo?: WidgetCreateLocationInfo_proto.WidgetCreateLocationInfo;
}

