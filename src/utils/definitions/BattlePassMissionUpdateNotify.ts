import * as BattlePassMission_proto from "./BattlePassMission"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2643
}

export interface BattlePassMissionUpdateNotify {
	missionList?: BattlePassMission_proto.BattlePassMission[];
}

