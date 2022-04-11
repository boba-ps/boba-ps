import * as BattlePassSchedule_proto from "./BattlePassSchedule"

import * as BattlePassMission_proto from "./BattlePassMission"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2603
}

export interface BattlePassAllDataNotify {
	haveCurSchedule?: boolean;
	curSchedule?: BattlePassSchedule_proto.BattlePassSchedule;
	missionList?: BattlePassMission_proto.BattlePassMission[];
}

