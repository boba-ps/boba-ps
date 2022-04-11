import * as CrucibleBattleUidInfo_proto from "./CrucibleBattleUidInfo"

import * as Vector_proto from "./Vector"

export interface CrucibleActivityDetailInfo {
	costTime?: number;
	uidInfoList?: CrucibleBattleUidInfo_proto.CrucibleBattleUidInfo[];
	pos?: Vector_proto.Vector;
	battleWorldLevel?: number;
}

