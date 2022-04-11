import * as HuntingPair_proto from "./HuntingPair"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4343
}

export interface TakeHuntingOfferRsp {
	retcode?: number;
	cityId?: number;
	huntingPair?: HuntingPair_proto.HuntingPair;
}

