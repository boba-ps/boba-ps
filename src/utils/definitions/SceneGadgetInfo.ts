import * as Item_proto from "./Item"

import * as GatherGadgetInfo_proto from "./GatherGadgetInfo"

import * as WorktopInfo_proto from "./WorktopInfo"

import * as ClientGadgetInfo_proto from "./ClientGadgetInfo"

import * as WeatherInfo_proto from "./WeatherInfo"

import * as AbilityGadgetInfo_proto from "./AbilityGadgetInfo"

import * as StatueGadgetInfo_proto from "./StatueGadgetInfo"

import * as BossChestInfo_proto from "./BossChestInfo"

import * as BlossomChestInfo_proto from "./BlossomChestInfo"

import * as MpPlayRewardInfo_proto from "./MpPlayRewardInfo"

import * as GadgetGeneralRewardInfo_proto from "./GadgetGeneralRewardInfo"

import * as OfferingInfo_proto from "./OfferingInfo"

import * as FoundationInfo_proto from "./FoundationInfo"

import * as VehicleInfo_proto from "./VehicleInfo"

import * as EchoShellInfo_proto from "./EchoShellInfo"

import * as ScreenInfo_proto from "./ScreenInfo"

import * as FishPoolInfo_proto from "./FishPoolInfo"

import * as CustomGadgetTreeInfo_proto from "./CustomGadgetTreeInfo"

import * as RoguelikeGadgetInfo_proto from "./RoguelikeGadgetInfo"

import * as GadgetBornType_proto from "./GadgetBornType"

import * as PlatformInfo_proto from "./PlatformInfo"

import * as GadgetPlayInfo_proto from "./GadgetPlayInfo"

export interface SceneGadgetInfo {
	trifleItem?: Item_proto.Item;
	gatherGadget?: GatherGadgetInfo_proto.GatherGadgetInfo;
	worktop?: WorktopInfo_proto.WorktopInfo;
	clientGadget?: ClientGadgetInfo_proto.ClientGadgetInfo;
	weather?: WeatherInfo_proto.WeatherInfo;
	abilityGadget?: AbilityGadgetInfo_proto.AbilityGadgetInfo;
	statueGadget?: StatueGadgetInfo_proto.StatueGadgetInfo;
	bossChest?: BossChestInfo_proto.BossChestInfo;
	blossomChest?: BlossomChestInfo_proto.BlossomChestInfo;
	mpPlayReward?: MpPlayRewardInfo_proto.MpPlayRewardInfo;
	generalReward?: GadgetGeneralRewardInfo_proto.GadgetGeneralRewardInfo;
	offeringInfo?: OfferingInfo_proto.OfferingInfo;
	foundationInfo?: FoundationInfo_proto.FoundationInfo;
	vehicleInfo?: VehicleInfo_proto.VehicleInfo;
	shellInfo?: EchoShellInfo_proto.EchoShellInfo;
	screenInfo?: ScreenInfo_proto.ScreenInfo;
	fishPoolInfo?: FishPoolInfo_proto.FishPoolInfo;
	customGadgetTreeInfo?: CustomGadgetTreeInfo_proto.CustomGadgetTreeInfo;
	roguelikeGadgetInfo?: RoguelikeGadgetInfo_proto.RoguelikeGadgetInfo;
	gadgetId?: number;
	groupId?: number;
	configId?: number;
	ownerEntityId?: number;
	bornType?: GadgetBornType_proto.GadgetBornType;
	gadgetState?: number;
	gadgetType?: number;
	isShowCutscene?: boolean;
	authorityPeerId?: number;
	isEnableInteract?: boolean;
	interactId?: number;
	markFlag?: number;
	propOwnerEntityId?: number;
	platform?: PlatformInfo_proto.PlatformInfo;
	interactUidList?: number[];
	draftId?: number;
	gadgetTalkState?: number;
	playInfo?: GadgetPlayInfo_proto.GadgetPlayInfo;
}

