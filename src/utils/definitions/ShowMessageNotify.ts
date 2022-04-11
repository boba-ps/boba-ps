import * as SvrMsgId_proto from "./SvrMsgId"

import * as MsgParam_proto from "./MsgParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 84
}

export interface ShowMessageNotify {
	msgId?: SvrMsgId_proto.SvrMsgId;
	params?: MsgParam_proto.MsgParam[];
}

