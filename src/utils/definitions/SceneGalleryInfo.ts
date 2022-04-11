import * as SceneGalleryBalloonInfo_proto from "./SceneGalleryBalloonInfo"

import * as SceneGalleryFallInfo_proto from "./SceneGalleryFallInfo"

import * as SceneGalleryFlowerInfo_proto from "./SceneGalleryFlowerInfo"

import * as SceneGalleryBulletInfo_proto from "./SceneGalleryBulletInfo"

import * as SceneGalleryBrokenFloorInfo_proto from "./SceneGalleryBrokenFloorInfo"

import * as SceneGalleryHideAndSeekInfo_proto from "./SceneGalleryHideAndSeekInfo"

import * as SceneGalleryBuoyantCombatInfo_proto from "./SceneGalleryBuoyantCombatInfo"

import * as SceneGalleryBounceConjuringInfo_proto from "./SceneGalleryBounceConjuringInfo"

import * as SceneGalleryHandballInfo_proto from "./SceneGalleryHandballInfo"

import * as SceneGallerySumoInfo_proto from "./SceneGallerySumoInfo"

import * as GalleryStageType_proto from "./GalleryStageType"

import * as SceneGalleryProgressInfo_proto from "./SceneGalleryProgressInfo"

export interface SceneGalleryInfo {
	balloonInfo?: SceneGalleryBalloonInfo_proto.SceneGalleryBalloonInfo;
	fallInfo?: SceneGalleryFallInfo_proto.SceneGalleryFallInfo;
	flowerInfo?: SceneGalleryFlowerInfo_proto.SceneGalleryFlowerInfo;
	bulletInfo?: SceneGalleryBulletInfo_proto.SceneGalleryBulletInfo;
	brokenFloorInfo?: SceneGalleryBrokenFloorInfo_proto.SceneGalleryBrokenFloorInfo;
	hideAndSeekInfo?: SceneGalleryHideAndSeekInfo_proto.SceneGalleryHideAndSeekInfo;
	buoyantCombatInfo?: SceneGalleryBuoyantCombatInfo_proto.SceneGalleryBuoyantCombatInfo;
	bounceConjuringInfo?: SceneGalleryBounceConjuringInfo_proto.SceneGalleryBounceConjuringInfo;
	handballInfo?: SceneGalleryHandballInfo_proto.SceneGalleryHandballInfo;
	sumoInfo?: SceneGallerySumoInfo_proto.SceneGallerySumoInfo;
	galleryId?: number;
	endTime?: number;
	stage?: GalleryStageType_proto.GalleryStageType;
	preStartEndTime?: number;
	progressInfoList?: SceneGalleryProgressInfo_proto.SceneGalleryProgressInfo[];
	playerCount?: number;
}

