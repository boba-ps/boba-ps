import * as ChallengeRecord_proto from "./ChallengeRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 996
}

export interface ChallengeRecordNotify {
	groupId?: number;
	challengeRecordList?: ChallengeRecord_proto.ChallengeRecord[];
}

