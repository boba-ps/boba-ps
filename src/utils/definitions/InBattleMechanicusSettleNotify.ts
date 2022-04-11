import * as MultistageSettleWatcherInfo_proto from "./MultistageSettleWatcherInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5319
}

export interface InBattleMechanicusSettleNotify {
	playIndex?: number;
	groupId?: number;
	watcherList?: MultistageSettleWatcherInfo_proto.MultistageSettleWatcherInfo[];
	totalToken?: number;
	realToken?: number;
	difficultyPercentage?: number;
	isSuccess?: boolean;
	sceneTimeMs?: number;
}

