import * as FallPlayerBrief_proto from "./FallPlayerBrief"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5501
}

export interface GalleryFallScoreNotify {
	galleryId?: number;
	uidBriefMap?: FallPlayerBrief_proto.FallPlayerBrief;
}

