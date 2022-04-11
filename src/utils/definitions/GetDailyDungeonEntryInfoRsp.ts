import * as DailyDungeonEntryInfo_proto from "./DailyDungeonEntryInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 993
}

export interface GetDailyDungeonEntryInfoRsp {
	retcode?: number;
	dailyDungeonInfoList?: DailyDungeonEntryInfo_proto.DailyDungeonEntryInfo[];
}

