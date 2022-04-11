import * as GadgetCrucibleInfo_proto from "./GadgetCrucibleInfo"

export interface GadgetPlayInfo {
	crucibleInfo?: GadgetCrucibleInfo_proto.GadgetCrucibleInfo;
	playType?: number;
	duration?: number;
	progressStageList?: number[];
	startCd?: number;
	startTime?: number;
	progress?: number;
}

