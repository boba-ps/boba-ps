export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 674
}

export enum ItemExceedLimitMsgType {
	ITEM_EXCEED_LIMIT_MSG_DEFAULT = 0,
	ITEM_EXCEED_LIMIT_MSG_TEXT = 1,
	ITEM_EXCEED_LIMIT_MSG_DIALOG = 2
}

export interface CheckAddItemExceedLimitNotify {
	isDrop?: boolean;
	exceededItemList?: number[];
	exceededItemTypeList?: number[];
	msgType?: ItemExceedLimitMsgType;
}

