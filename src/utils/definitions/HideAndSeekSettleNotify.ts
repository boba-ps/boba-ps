import * as ExhibitionDisplayInfo_proto from "./ExhibitionDisplayInfo"

import * as HideAndSeekSettleInfo_proto from "./HideAndSeekSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5308
}

export enum SettleReason {
	TIME_OUT = 0,
	SETTLE_PLAY_END = 1,
	SETTLE_PLAYER_QUIT = 2
}

export interface HideAndSeekSettleNotify {
	playIndex?: number;
	stageType?: number;
	costTime?: number;
	winnerList?: number[];
	reason?: SettleReason;
	scoreList?: ExhibitionDisplayInfo_proto.ExhibitionDisplayInfo[];
	settleInfoList?: HideAndSeekSettleInfo_proto.HideAndSeekSettleInfo[];
	isRecordScore?: boolean;
}

