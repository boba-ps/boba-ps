export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8163
}

export interface ChannellerSlabWearBuffRsp {
	retcode?: number;
	buffId?: number;
	slotId?: number;
	isMp?: boolean;
}

