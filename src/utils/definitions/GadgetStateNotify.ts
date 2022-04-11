export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 889
}

export interface GadgetStateNotify {
	gadgetEntityId?: number;
	gadgetState?: number;
	isEnableInteract?: boolean;
}

