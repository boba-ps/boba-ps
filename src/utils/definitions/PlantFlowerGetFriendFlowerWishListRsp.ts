import * as PlantFlowerFriendFlowerWishData_proto from "./PlantFlowerFriendFlowerWishData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8800
}

export interface PlantFlowerGetFriendFlowerWishListRsp {
	retcode?: number;
	scheduleId?: number;
	friendFlowerWishList?: PlantFlowerFriendFlowerWishData_proto.PlantFlowerFriendFlowerWishData[];
}

