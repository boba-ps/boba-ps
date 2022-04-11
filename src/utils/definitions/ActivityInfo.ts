import * as SeaLampActivityDetailInfo_proto from "./SeaLampActivityDetailInfo"

import * as CrucibleActivityDetailInfo_proto from "./CrucibleActivityDetailInfo"

import * as SalesmanActivityDetailInfo_proto from "./SalesmanActivityDetailInfo"

import * as TrialAvatarActivityDetailInfo_proto from "./TrialAvatarActivityDetailInfo"

import * as DeliveryActivityDetailInfo_proto from "./DeliveryActivityDetailInfo"

import * as AsterActivityDetailInfo_proto from "./AsterActivityDetailInfo"

import * as FlightActivityDetailInfo_proto from "./FlightActivityDetailInfo"

import * as DragonSpineActivityDetailInfo_proto from "./DragonSpineActivityDetailInfo"

import * as EffigyActivityDetailInfo_proto from "./EffigyActivityDetailInfo"

import * as TreasureMapActivityDetailInfo_proto from "./TreasureMapActivityDetailInfo"

import * as BlessingActivityDetailInfo_proto from "./BlessingActivityDetailInfo"

import * as SeaLampActivityInfo_proto from "./SeaLampActivityInfo"

import * as ExpeditionActivityDetailInfo_proto from "./ExpeditionActivityDetailInfo"

import * as ArenaChallengeActivityDetailInfo_proto from "./ArenaChallengeActivityDetailInfo"

import * as FleurFairActivityDetailInfo_proto from "./FleurFairActivityDetailInfo"

import * as WaterSpiritActivityDetailInfo_proto from "./WaterSpiritActivityDetailInfo"

import * as ChannelerSlabActivityDetailInfo_proto from "./ChannelerSlabActivityDetailInfo"

import * as MistTrialActivityDetailInfo_proto from "./MistTrialActivityDetailInfo"

import * as HideAndSeekActivityDetailInfo_proto from "./HideAndSeekActivityDetailInfo"

import * as FindHilichurlDetailInfo_proto from "./FindHilichurlDetailInfo"

import * as SummerTimeDetailInfo_proto from "./SummerTimeDetailInfo"

import * as BuoyantCombatDetailInfo_proto from "./BuoyantCombatDetailInfo"

import * as EchoShellDetailInfo_proto from "./EchoShellDetailInfo"

import * as BounceConjuringActivityDetailInfo_proto from "./BounceConjuringActivityDetailInfo"

import * as BlitzRushActivityDetailInfo_proto from "./BlitzRushActivityDetailInfo"

import * as ChessActivityDetailInfo_proto from "./ChessActivityDetailInfo"

import * as SumoActivityDetailInfo_proto from "./SumoActivityDetailInfo"

import * as MoonfinTrialActivityDetailInfo_proto from "./MoonfinTrialActivityDetailInfo"

import * as LunaRiteDetailInfo_proto from "./LunaRiteDetailInfo"

import * as PlantFlowerActivityDetailInfo_proto from "./PlantFlowerActivityDetailInfo"

import * as MusicGameActivityDetailInfo_proto from "./MusicGameActivityDetailInfo"

import * as RoguelikeDungeonActivityDetailInfo_proto from "./RoguelikeDungeonActivityDetailInfo"

import * as DigActivityDetailInfo_proto from "./DigActivityDetailInfo"

import * as ActivityWatcherInfo_proto from "./ActivityWatcherInfo"

export interface ActivityInfo {
	samLampInfo?: SeaLampActivityDetailInfo_proto.SeaLampActivityDetailInfo;
	crucibleInfo?: CrucibleActivityDetailInfo_proto.CrucibleActivityDetailInfo;
	salesmanInfo?: SalesmanActivityDetailInfo_proto.SalesmanActivityDetailInfo;
	trialAvatarInfo?: TrialAvatarActivityDetailInfo_proto.TrialAvatarActivityDetailInfo;
	deliveryInfo?: DeliveryActivityDetailInfo_proto.DeliveryActivityDetailInfo;
	asterInfo?: AsterActivityDetailInfo_proto.AsterActivityDetailInfo;
	flightInfo?: FlightActivityDetailInfo_proto.FlightActivityDetailInfo;
	dragonSpineInfo?: DragonSpineActivityDetailInfo_proto.DragonSpineActivityDetailInfo;
	effigyInfo?: EffigyActivityDetailInfo_proto.EffigyActivityDetailInfo;
	treasureMapInfo?: TreasureMapActivityDetailInfo_proto.TreasureMapActivityDetailInfo;
	blessingInfo?: BlessingActivityDetailInfo_proto.BlessingActivityDetailInfo;
	seaLampInfo?: SeaLampActivityInfo_proto.SeaLampActivityInfo;
	expeditionInfo?: ExpeditionActivityDetailInfo_proto.ExpeditionActivityDetailInfo;
	arenaChallengeInfo?: ArenaChallengeActivityDetailInfo_proto.ArenaChallengeActivityDetailInfo;
	fleurFairInfo?: FleurFairActivityDetailInfo_proto.FleurFairActivityDetailInfo;
	waterSpiritInfo?: WaterSpiritActivityDetailInfo_proto.WaterSpiritActivityDetailInfo;
	challnelerSlabInfo?: ChannelerSlabActivityDetailInfo_proto.ChannelerSlabActivityDetailInfo;
	mistTrialActivityInfo?: MistTrialActivityDetailInfo_proto.MistTrialActivityDetailInfo;
	hideAndSeekInfo?: HideAndSeekActivityDetailInfo_proto.HideAndSeekActivityDetailInfo;
	findHilichurlInfo?: FindHilichurlDetailInfo_proto.FindHilichurlDetailInfo;
	summerTimeInfo?: SummerTimeDetailInfo_proto.SummerTimeDetailInfo;
	buoyantCombatInfo?: BuoyantCombatDetailInfo_proto.BuoyantCombatDetailInfo;
	echoShellInfo?: EchoShellDetailInfo_proto.EchoShellDetailInfo;
	bounceConjuringInfo?: BounceConjuringActivityDetailInfo_proto.BounceConjuringActivityDetailInfo;
	blitzRushInfo?: BlitzRushActivityDetailInfo_proto.BlitzRushActivityDetailInfo;
	chessInfo?: ChessActivityDetailInfo_proto.ChessActivityDetailInfo;
	sumoInfo?: SumoActivityDetailInfo_proto.SumoActivityDetailInfo;
	moonfinTrialInfo?: MoonfinTrialActivityDetailInfo_proto.MoonfinTrialActivityDetailInfo;
	lunaRiteInfo?: LunaRiteDetailInfo_proto.LunaRiteDetailInfo;
	plantFlowerInfo?: PlantFlowerActivityDetailInfo_proto.PlantFlowerActivityDetailInfo;
	musicGameInfo?: MusicGameActivityDetailInfo_proto.MusicGameActivityDetailInfo;
	roguelikeDungoenInfo?: RoguelikeDungeonActivityDetailInfo_proto.RoguelikeDungeonActivityDetailInfo;
	digInfo?: DigActivityDetailInfo_proto.DigActivityDetailInfo;
	activityId?: number;
	scheduleId?: number;
	beginTime?: number;
	endTime?: number;
	activityType?: number;
	isPlayOpenAnim?: boolean;
	isFinished?: boolean;
	isStarting?: boolean;
	watcherInfoList?: ActivityWatcherInfo_proto.ActivityWatcherInfo[];
	meetCondList?: number[];
	expireCondList?: number[];
	selectedAvatarRewardId?: number;
	activityCoinMap?: number;
	scoreLimit?: number;
	curScore?: number;
	takenRewardList?: number[];
	isHidden?: boolean;
	firstDayStartTime?: number;
}

