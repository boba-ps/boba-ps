import * as MatchReason_proto from "./MatchReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4194
}

export interface PlayerGeneralMatchDismissNotify {
	matchId?: number;
	reason?: MatchReason_proto.MatchReason;
	uidList?: number[];
}

