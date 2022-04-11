export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5227
}

export interface MiracleRingDataNotify {
	lastDeliverItemTime?: number;
	lastTakeRewardTime?: number;
	miracleRingCd?: number;
	isGadgetCreated?: boolean;
	gadgetEntityId?: number;
}

