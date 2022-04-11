import * as BargainResultType_proto from "./BargainResultType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 422
}

export interface BargainOfferPriceRsp {
	retcode?: number;
	bargainResult?: BargainResultType_proto.BargainResultType;
	resultParam?: number;
	curMood?: number;
}

