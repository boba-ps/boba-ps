import * as BargainSnapshot_proto from "./BargainSnapshot"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 456
}

export interface GetAllActivatedBargainDataRsp {
	retcode?: number;
	snapshotList?: BargainSnapshot_proto.BargainSnapshot[];
}

