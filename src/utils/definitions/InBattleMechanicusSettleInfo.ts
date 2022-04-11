import * as MultistageSettleWatcherInfo_proto from "./MultistageSettleWatcherInfo"

export interface InBattleMechanicusSettleInfo {
	playIndex?: number;
	groupId?: number;
	watcherList?: MultistageSettleWatcherInfo_proto.MultistageSettleWatcherInfo[];
	totalToken?: number;
	realToken?: number;
	difficultyPercentage?: number;
	isSuccess?: boolean;
	sceneTimeMs?: number;
}

