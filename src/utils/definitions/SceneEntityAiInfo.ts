import * as Vector_proto from "./Vector"

import * as ServantInfo_proto from "./ServantInfo"

export interface SceneEntityAiInfo {
	isAiOpen?: boolean;
	bornPos?: Vector_proto.Vector;
	skillCdMap?: number;
	servantInfo?: ServantInfo_proto.ServantInfo;
	aiThreatMap?: number;
	skillGroupCdMap?: number;
	curTactic?: number;
}

