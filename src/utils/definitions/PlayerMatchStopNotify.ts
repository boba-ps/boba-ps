import * as MatchReason_proto from "./MatchReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4182
}

export interface PlayerMatchStopNotify {
	hostUid?: number;
	reason?: MatchReason_proto.MatchReason;
}

