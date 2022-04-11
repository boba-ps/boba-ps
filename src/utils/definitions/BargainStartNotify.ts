import * as BargainSnapshot_proto from "./BargainSnapshot"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 416
}

export interface BargainStartNotify {
	bargainId?: number;
	snapshot?: BargainSnapshot_proto.BargainSnapshot;
}

