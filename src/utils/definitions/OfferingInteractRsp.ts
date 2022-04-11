import * as PlayerOfferingData_proto from "./PlayerOfferingData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2913
}

export interface OfferingInteractRsp {
	retcode?: number;
	offeringData?: PlayerOfferingData_proto.PlayerOfferingData;
}

