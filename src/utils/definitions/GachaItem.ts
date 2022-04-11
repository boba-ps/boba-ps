import * as ItemParam_proto from "./ItemParam"

import * as GachaTransferItem_proto from "./GachaTransferItem"

export interface GachaItem {
	gachaItem_?: ItemParam_proto.ItemParam;
	transferItems?: GachaTransferItem_proto.GachaTransferItem[];
	isFlashCard?: boolean;
	isGachaItemNew?: boolean;
	tokenItemList?: ItemParam_proto.ItemParam[];
}

