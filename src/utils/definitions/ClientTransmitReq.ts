import * as Vector_proto from "./Vector"

import * as TransmitReason_proto from "./TransmitReason"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 220
}

export interface ClientTransmitReq {
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
	reason?: TransmitReason_proto.TransmitReason;
	sceneId?: number;
}

