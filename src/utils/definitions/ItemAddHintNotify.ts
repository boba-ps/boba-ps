import * as ItemHint_proto from "./ItemHint"

import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 700
}

export interface ItemAddHintNotify {
	itemList?: ItemHint_proto.ItemHint[];
	position?: Vector_proto.Vector;
	isPositionValid?: boolean;
	reason?: number;
	questId?: number;
	isTransferedFromAvatarCard?: boolean;
	overflowTransformedItemList?: ItemHint_proto.ItemHint[];
	isGeneralRewardHiden?: boolean;
}

