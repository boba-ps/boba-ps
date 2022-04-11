import * as PropValue_proto from "./PropValue"

import * as TrialAvatarInfo_proto from "./TrialAvatarInfo"

import * as AvatarSkillInfo_proto from "./AvatarSkillInfo"

import * as AvatarFetterInfo_proto from "./AvatarFetterInfo"

import * as AvatarExpeditionState_proto from "./AvatarExpeditionState"

import * as AvatarEquipAffixInfo_proto from "./AvatarEquipAffixInfo"

import * as AvatarExcelInfo_proto from "./AvatarExcelInfo"

export interface AvatarInfo {
	avatarId?: number;
	guid?: number;
	propMap?: PropValue_proto.PropValue;
	lifeState?: number;
	equipGuidList?: number[];
	talentIdList?: number[];
	fightPropMap?: number;
	trialAvatarInfo?: TrialAvatarInfo_proto.TrialAvatarInfo;
	skillMap?: AvatarSkillInfo_proto.AvatarSkillInfo;
	skillDepotId?: number;
	fetterInfo?: AvatarFetterInfo_proto.AvatarFetterInfo;
	coreProudSkillLevel?: number;
	inherentProudSkillList?: number[];
	skillLevelMap?: number;
	expeditionState?: AvatarExpeditionState_proto.AvatarExpeditionState;
	proudSkillExtraLevelMap?: number;
	isFocus?: boolean;
	avatarType?: number;
	teamResonanceList?: number[];
	wearingFlycloakId?: number;
	equipAffixList?: AvatarEquipAffixInfo_proto.AvatarEquipAffixInfo[];
	bornTime?: number;
	pendingPromoteRewardList?: number[];
	costumeId?: number;
	excelInfo?: AvatarExcelInfo_proto.AvatarExcelInfo;
	animHash?: number;
}

