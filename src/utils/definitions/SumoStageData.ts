import * as SumoTeamData_proto from "./SumoTeamData"

export interface SumoStageData {
	stageId?: number;
	maxScore?: number;
	openTime?: number;
	isOpen?: boolean;
	teamList?: SumoTeamData_proto.SumoTeamData[];
}

