import * as RoguelikeDungeonSettleInfo_proto from "./RoguelikeDungeonSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8605
}

export interface RoguelikeGiveUpRsp {
	settleInfo?: RoguelikeDungeonSettleInfo_proto.RoguelikeDungeonSettleInfo;
	stageId?: number;
	retcode?: number;
}

