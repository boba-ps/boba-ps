import * as WidgetCreateLocationInfo_proto from "./WidgetCreateLocationInfo"

import * as WidgetCameraInfo_proto from "./WidgetCameraInfo"

import * as WidgetCreatorInfo_proto from "./WidgetCreatorInfo"

import * as WidgetThunderBirdFeatherInfo_proto from "./WidgetThunderBirdFeatherInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4300
}

export interface QuickUseWidgetReq {
	locationInfo?: WidgetCreateLocationInfo_proto.WidgetCreateLocationInfo;
	cameraInfo?: WidgetCameraInfo_proto.WidgetCameraInfo;
	creatorInfo?: WidgetCreatorInfo_proto.WidgetCreatorInfo;
	thunderBirdFeatherInfo?: WidgetThunderBirdFeatherInfo_proto.WidgetThunderBirdFeatherInfo;
}

