import * as SumoTeamData_proto from "./SumoTeamData"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 8812
}

export interface SumoSaveTeamReq {
	activityId?: number;
	stageId?: number;
	difficultyId?: number;
	teamList?: SumoTeamData_proto.SumoTeamData[];
}

