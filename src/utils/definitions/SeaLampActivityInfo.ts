import * as SeaLampSectionInfo_proto from "./SeaLampSectionInfo"

export interface SeaLampActivityInfo {
	dayIndex?: number;
	popularity?: number;
	seaLampCoin?: number;
	isContentClosed?: boolean;
	sectionInfoList?: SeaLampSectionInfo_proto.SeaLampSectionInfo[];
	mechanicusId?: number;
	isMechanicusOpen?: boolean;
	firstDayStartTime?: number;
	isMechanicusFeatureClose?: boolean;
}

