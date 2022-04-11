import * as SumoDungeonTeam_proto from "./SumoDungeonTeam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8815
}

export interface SumoSetNoSwitchPunishTimeNotify {
	activityId?: number;
	stageId?: number;
	dungeonTeamList?: SumoDungeonTeam_proto.SumoDungeonTeam[];
	curTeamIndex?: number;
	nextValidSwitchTime?: number;
	noSwitchPunishTime?: number;
}

