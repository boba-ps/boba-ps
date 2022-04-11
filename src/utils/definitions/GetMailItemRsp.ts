import * as EquipParam_proto from "./EquipParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1500
}

export interface GetMailItemRsp {
	retcode?: number;
	mailIdList?: number[];
	itemList?: EquipParam_proto.EquipParam[];
}

