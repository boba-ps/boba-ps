export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8290
}

export interface ChannellerSlabOneOffDungeonInfoRsp {
	retcode?: number;
	schemeBuffIdList?: number[];
}

