export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3239
}

export interface ShowTemplateReminderNotify {
	templateReminderId?: number;
	paramList?: number[];
	paramUidList?: number[];
	isRevoke?: boolean;
}

