import * as ChannellerSlabLoopDungeonResultInfo_proto from "./ChannellerSlabLoopDungeonResultInfo"

import * as EffigyChallengeDungeonResultInfo_proto from "./EffigyChallengeDungeonResultInfo"

import * as StrengthenPointData_proto from "./StrengthenPointData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 970
}

export interface DungeonChallengeFinishNotify {
	channellerSlabLoopDungeonResultInfo?: ChannellerSlabLoopDungeonResultInfo_proto.ChannellerSlabLoopDungeonResultInfo;
	effigyChallengeDungeonResultInfo?: EffigyChallengeDungeonResultInfo_proto.EffigyChallengeDungeonResultInfo;
	challengeIndex?: number;
	isSuccess?: boolean;
	isNewRecord?: boolean;
	challengeRecordType?: number;
	currentValue?: number;
	strengthenPointDataMap?: StrengthenPointData_proto.StrengthenPointData;
}

