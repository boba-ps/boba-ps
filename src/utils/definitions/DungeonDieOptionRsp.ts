import * as PlayerDieOption_proto from "./PlayerDieOption"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 924
}

export interface DungeonDieOptionRsp {
	retcode?: number;
	dieOption?: PlayerDieOption_proto.PlayerDieOption;
	reviveCount?: number;
}

