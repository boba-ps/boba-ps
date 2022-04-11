import * as ChannelerSlabChallengeStage_proto from "./ChannelerSlabChallengeStage"

import * as ChannellerSlabBuffInfo_proto from "./ChannellerSlabBuffInfo"

import * as ChannellerSlabLoopDungeonStageInfo_proto from "./ChannellerSlabLoopDungeonStageInfo"

export interface ChannelerSlabActivityDetailInfo {
	stageList?: ChannelerSlabChallengeStage_proto.ChannelerSlabChallengeStage[];
	playEndTime?: number;
	buffInfo?: ChannellerSlabBuffInfo_proto.ChannellerSlabBuffInfo;
	loopDungeonStageInfo?: ChannellerSlabLoopDungeonStageInfo_proto.ChannellerSlabLoopDungeonStageInfo;
}

