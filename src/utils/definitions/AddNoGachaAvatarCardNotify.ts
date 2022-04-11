import * as AddNoGachaAvatarCardTransferItem_proto from "./AddNoGachaAvatarCardTransferItem"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1614
}

export interface AddNoGachaAvatarCardNotify {
	itemId?: number;
	isTransferToItem?: boolean;
	avatarId?: number;
	initialLevel?: number;
	initialPromoteLevel?: number;
	transferItemList?: AddNoGachaAvatarCardTransferItem_proto.AddNoGachaAvatarCardTransferItem[];
	reason?: number;
}

