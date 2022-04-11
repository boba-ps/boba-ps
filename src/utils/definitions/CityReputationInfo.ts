import * as CityReputationQuestInfo_proto from "./CityReputationQuestInfo"

import * as CityReputationRequestInfo_proto from "./CityReputationRequestInfo"

import * as CityReputationExploreInfo_proto from "./CityReputationExploreInfo"

import * as CityReputationHuntInfo_proto from "./CityReputationHuntInfo"

export interface CityReputationInfo {
	level?: number;
	exp?: number;
	takenLevelRewardList?: number[];
	totalAcceptRequestNum?: number;
	nextRefreshTime?: number;
	questInfo?: CityReputationQuestInfo_proto.CityReputationQuestInfo;
	requestInfo?: CityReputationRequestInfo_proto.CityReputationRequestInfo;
	exploreInfo?: CityReputationExploreInfo_proto.CityReputationExploreInfo;
	huntInfo?: CityReputationHuntInfo_proto.CityReputationHuntInfo;
}

