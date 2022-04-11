import * as BattlePassSchedule_proto from "./BattlePassSchedule"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2605
}

export interface BattlePassCurScheduleUpdateNotify {
	haveCurSchedule?: boolean;
	curSchedule?: BattlePassSchedule_proto.BattlePassSchedule;
}

