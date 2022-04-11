import * as BargainSnapshot_proto from "./BargainSnapshot"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 410
}

export interface GetBargainDataRsp {
	retcode?: number;
	bargainId?: number;
	snapshot?: BargainSnapshot_proto.BargainSnapshot;
}

