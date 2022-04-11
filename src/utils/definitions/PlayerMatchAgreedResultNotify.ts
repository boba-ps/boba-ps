import * as MatchType_proto from "./MatchType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4158
}

export enum Reason {
	SUCC = 0,
	TARGET_SCENE_CANNOT_ENTER = 1,
	SELF_MP_UNAVAILABLE = 2,
	OTHER_DATA_VERSION_NOT_LATEST = 3,
	DATA_VERSION_NOT_LATEST = 4
}

export interface PlayerMatchAgreedResultNotify {
	targetUid?: number;
	reason?: Reason;
	matchType?: MatchType_proto.MatchType;
}

