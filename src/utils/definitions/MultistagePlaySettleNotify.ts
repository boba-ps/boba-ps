import * as InBattleMechanicusSettleInfo_proto from "./InBattleMechanicusSettleInfo"

import * as InBattleChessSettleInfo_proto from "./InBattleChessSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5363
}

export interface MultistagePlaySettleNotify {
	mechanicusSettleInfo?: InBattleMechanicusSettleInfo_proto.InBattleMechanicusSettleInfo;
	chessSettleInfo?: InBattleChessSettleInfo_proto.InBattleChessSettleInfo;
	playIndex?: number;
	groupId?: number;
}

