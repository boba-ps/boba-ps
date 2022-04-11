import * as HomeResource_proto from "./HomeResource"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4559
}

export interface HomeResourceTakeFetterExpRsp {
	retcode?: number;
	fetterExp?: HomeResource_proto.HomeResource;
}
