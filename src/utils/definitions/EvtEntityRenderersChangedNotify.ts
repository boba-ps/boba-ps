import * as ForwardType_proto from "./ForwardType"

import * as EntityRendererChangedInfo_proto from "./EntityRendererChangedInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 355
}

export interface EvtEntityRenderersChangedNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	isServerCache?: boolean;
	rendererChangedInfo?: EntityRendererChangedInfo_proto.EntityRendererChangedInfo;
}

