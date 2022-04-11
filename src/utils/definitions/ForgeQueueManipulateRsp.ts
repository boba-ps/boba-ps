import * as ForgeQueueManipulateType_proto from "./ForgeQueueManipulateType"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 631
}

export interface ForgeQueueManipulateRsp {
	retcode?: number;
	manipulateType?: ForgeQueueManipulateType_proto.ForgeQueueManipulateType;
	outputItemList?: ItemParam_proto.ItemParam[];
	returnItemList?: ItemParam_proto.ItemParam[];
	extraOutputItemList?: ItemParam_proto.ItemParam[];
}

