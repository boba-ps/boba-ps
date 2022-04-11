import * as HuntingOfferData_proto from "./HuntingOfferData"

import * as HuntingPair_proto from "./HuntingPair"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4305
}

export interface GetCityHuntingOfferRsp {
	retcode?: number;
	cityId?: number;
	huntingOfferList?: HuntingOfferData_proto.HuntingOfferData[];
	curWeekFinishedCount?: number;
	ongoingHuntingPair?: HuntingPair_proto.HuntingPair;
	nextRefreshTime?: number;
}

