import * as HuntingPair_proto from "./HuntingPair"

import * as HuntingOfferState_proto from "./HuntingOfferState"

export interface HuntingOfferData {
	huntingPair?: HuntingPair_proto.HuntingPair;
	cityId?: number;
	state?: HuntingOfferState_proto.HuntingOfferState;
}

