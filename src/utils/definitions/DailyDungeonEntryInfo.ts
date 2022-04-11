import * as DungeonEntryInfo_proto from "./DungeonEntryInfo"

export interface DailyDungeonEntryInfo {
	dungeonEntryId?: number;
	dungeonEntryConfigId?: number;
	recommendDungeonId?: number;
	recommendDungeonEntryInfo?: DungeonEntryInfo_proto.DungeonEntryInfo;
}

