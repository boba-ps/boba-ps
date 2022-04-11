import * as RoguelikeRuneRecord_proto from "./RoguelikeRuneRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8706
}

export interface RoguelikeRuneRecordUpdateNotify {
	runeRecordList?: RoguelikeRuneRecord_proto.RoguelikeRuneRecord[];
}

