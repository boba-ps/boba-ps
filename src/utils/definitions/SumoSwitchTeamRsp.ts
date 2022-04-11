import * as SumoDungeonTeam_proto from "./SumoDungeonTeam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8539
}

export interface SumoSwitchTeamRsp {
	retcode?: number;
	activityId?: number;
	stageId?: number;
	curTeamIndex?: number;
	dungeonTeamList?: SumoDungeonTeam_proto.SumoDungeonTeam[];
	nextValidSwitchTime?: number;
}

