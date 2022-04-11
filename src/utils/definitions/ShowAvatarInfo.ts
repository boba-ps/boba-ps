import * as PropValue_proto from "./PropValue"

import * as ShowEquip_proto from "./ShowEquip"

import * as AvatarFetterInfo_proto from "./AvatarFetterInfo"

import * as AvatarExcelInfo_proto from "./AvatarExcelInfo"

export interface ShowAvatarInfo {
	avatarId?: number;
	propMap?: PropValue_proto.PropValue;
	talentIdList?: number[];
	fightPropMap?: number;
	skillDepotId?: number;
	coreProudSkillLevel?: number;
	inherentProudSkillList?: number[];
	skillLevelMap?: number;
	proudSkillExtraLevelMap?: number;
	equipList?: ShowEquip_proto.ShowEquip[];
	fetterInfo?: AvatarFetterInfo_proto.AvatarFetterInfo;
	costumeId?: number;
	excelInfo?: AvatarExcelInfo_proto.AvatarExcelInfo;
}

