export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4441
}

export interface ScenePlayBattleUidOpNotify {
	playId?: number;
	playType?: number;
	entityId?: number;
	uidList?: number[];
	op?: number;
	paramStr?: string;
	paramList?: number[];
	paramTargetList?: number[];
	paramIndex?: number;
	paramDuration?: number;
}
