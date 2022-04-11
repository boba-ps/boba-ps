import * as SceneWeaponInfo_proto from "./SceneWeaponInfo"

import * as SceneReliquaryInfo_proto from "./SceneReliquaryInfo"

import * as ServerBuff_proto from "./ServerBuff"

import * as CurVehicleInfo_proto from "./CurVehicleInfo"

import * as AvatarExcelInfo_proto from "./AvatarExcelInfo"

export interface SceneAvatarInfo {
	uid?: number;
	avatarId?: number;
	guid?: number;
	peerId?: number;
	equipIdList?: number[];
	skillDepotId?: number;
	talentIdList?: number[];
	weapon?: SceneWeaponInfo_proto.SceneWeaponInfo;
	reliquaryList?: SceneReliquaryInfo_proto.SceneReliquaryInfo[];
	coreProudSkillLevel?: number;
	inherentProudSkillList?: number[];
	skillLevelMap?: number;
	proudSkillExtraLevelMap?: number;
	serverBuffList?: ServerBuff_proto.ServerBuff[];
	teamResonanceList?: number[];
	wearingFlycloakId?: number;
	bornTime?: number;
	costumeId?: number;
	curVehicleInfo?: CurVehicleInfo_proto.CurVehicleInfo;
	excelInfo?: AvatarExcelInfo_proto.AvatarExcelInfo;
	animHash?: number;
}

