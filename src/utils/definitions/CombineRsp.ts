import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 695
}

export interface CombineRsp {
	retcode?: number;
	combineId?: number;
	combineCount?: number;
	avatarGuid?: number;
	costItemList?: ItemParam_proto.ItemParam[];
	resultItemList?: ItemParam_proto.ItemParam[];
	totalRandomItemList?: ItemParam_proto.ItemParam[];
	totalReturnItemList?: ItemParam_proto.ItemParam[];
	totalExtraItemList?: ItemParam_proto.ItemParam[];
}

