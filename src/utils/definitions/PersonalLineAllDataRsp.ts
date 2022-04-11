import * as LockedPersonallineData_proto from "./LockedPersonallineData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 499
}

export interface PersonalLineAllDataRsp {
	retcode?: number;
	curFinishedDailyTaskCount?: number;
	legendaryKeyCount?: number;
	ongoingPersonalLineList?: number[];
	canBeUnlockedPersonalLineList?: number[];
	lockedPersonalLineList?: LockedPersonallineData_proto.LockedPersonallineData[];
}

