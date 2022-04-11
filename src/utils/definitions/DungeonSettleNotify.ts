import * as TowerLevelEndNotify_proto from "./TowerLevelEndNotify"

import * as TrialAvatarFirstPassDungeonNotify_proto from "./TrialAvatarFirstPassDungeonNotify"

import * as ChannellerSlabLoopDungeonResultInfo_proto from "./ChannellerSlabLoopDungeonResultInfo"

import * as EffigyChallengeDungeonResultInfo_proto from "./EffigyChallengeDungeonResultInfo"

import * as RoguelikeDungeonSettleInfo_proto from "./RoguelikeDungeonSettleInfo"

import * as ParamList_proto from "./ParamList"

import * as StrengthenPointData_proto from "./StrengthenPointData"

import * as DungeonSettleExhibitionInfo_proto from "./DungeonSettleExhibitionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 979
}

export interface DungeonSettleNotify {
	towerLevelEndNotify?: TowerLevelEndNotify_proto.TowerLevelEndNotify;
	trialAvatarFirstPassDungeonNotify?: TrialAvatarFirstPassDungeonNotify_proto.TrialAvatarFirstPassDungeonNotify;
	channellerSlabLoopDungeonResultInfo?: ChannellerSlabLoopDungeonResultInfo_proto.ChannellerSlabLoopDungeonResultInfo;
	effigyChallengeDungeonResultInfo?: EffigyChallengeDungeonResultInfo_proto.EffigyChallengeDungeonResultInfo;
	roguelikeDungeonSettleInfo?: RoguelikeDungeonSettleInfo_proto.RoguelikeDungeonSettleInfo;
	dungeonId?: number;
	isSuccess?: boolean;
	failCondList?: number[];
	settleShow?: ParamList_proto.ParamList;
	closeTime?: number;
	strengthenPointDataMap?: StrengthenPointData_proto.StrengthenPointData;
	result?: number;
	exhibitionInfoList?: DungeonSettleExhibitionInfo_proto.DungeonSettleExhibitionInfo[];
}

