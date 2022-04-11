import * as ChannellerSlabLoopDungeonInfo_proto from "./ChannellerSlabLoopDungeonInfo"

export interface ChannellerSlabLoopDungeonStageInfo {
	dungeonInfoList?: ChannellerSlabLoopDungeonInfo_proto.ChannellerSlabLoopDungeonInfo[];
	lastDifficultyId?: number;
	takenRewardIndexList?: number[];
	openTime?: number;
	isOpen?: boolean;
}

