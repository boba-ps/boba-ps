import * as DungeonEntryInfo_proto from "./DungeonEntryInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 918
}

export interface DungeonEntryInfoRsp {
	retcode?: number;
	pointId?: number;
	dungeonEntryList?: DungeonEntryInfo_proto.DungeonEntryInfo[];
	recommendDungeonId?: number;
}

