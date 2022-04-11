export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 202
}

export interface ExecuteGroupTriggerReq {
	sourceEntityId?: number;
	sourceName?: string;
	targetEntityId?: number;
	param1?: number;
	param2?: number;
	param3?: number;
}

