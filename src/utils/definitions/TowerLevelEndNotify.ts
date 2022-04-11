import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2456
}

export enum ContinueStateType {
	CONTINUE_STATE_CAN_NOT_CONTINUE = 0,
	CONTINUE_STATE_CAN_ENTER_NEXT_LEVEL = 1,
	CONTINUE_STATE_CAN_ENTER_NEXT_FLOOR = 2
}

export interface TowerLevelEndNotify {
	isSuccess?: boolean;
	finishedStarCondList?: number[];
	rewardItemList?: ItemParam_proto.ItemParam[];
	continueState?: number;
	nextFloorId?: number;
}

