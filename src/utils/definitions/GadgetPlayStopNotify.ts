import * as GadgetPlayUidInfo_proto from "./GadgetPlayUidInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 879
}

export interface GadgetPlayStopNotify {
	playType?: number;
	entityId?: number;
	isWin?: boolean;
	costTime?: number;
	uidInfoList?: GadgetPlayUidInfo_proto.GadgetPlayUidInfo[];
	score?: number;
}

