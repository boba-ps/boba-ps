import * as SumoTeamData_proto from "./SumoTeamData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8533
}

export interface SumoSelectTeamAndEnterDungeonRsp {
	retcode?: number;
	activityId?: number;
	stageId?: number;
	difficultyId?: number;
	teamList?: SumoTeamData_proto.SumoTeamData[];
}

