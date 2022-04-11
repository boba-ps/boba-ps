import * as ScenePlayBattleSettlePlayerInfo_proto from "./ScenePlayBattleSettlePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4374
}

export interface ScenePlayBattleResultNotify {
	playId?: number;
	playType?: number;
	isWin?: boolean;
	costTime?: number;
	settlePlayerInfoList?: ScenePlayBattleSettlePlayerInfo_proto.ScenePlayBattleSettlePlayerInfo[];
}

