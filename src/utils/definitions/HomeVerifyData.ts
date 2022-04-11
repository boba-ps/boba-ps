import * as LanguageType_proto from "./LanguageType"

import * as HomeVerifySceneData_proto from "./HomeVerifySceneData"

export interface HomeVerifyData {
	uid?: number;
	region?: string;
	timestamp?: number;
	lang?: LanguageType_proto.LanguageType;
	homeInfo?: HomeVerifySceneData_proto.HomeVerifySceneData;
}

