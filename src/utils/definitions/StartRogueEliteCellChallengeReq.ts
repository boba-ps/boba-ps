import * as RogueEliteCellDifficultyType_proto from "./RogueEliteCellDifficultyType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 8126
}

export interface StartRogueEliteCellChallengeReq {
	cellId?: number;
	dungeonId?: number;
	difficulty?: RogueEliteCellDifficultyType_proto.RogueEliteCellDifficultyType;
}

