import * as UnionCmd_proto from "./UnionCmd"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 19
}

export interface UnionCmdNotify {
	cmdList?: UnionCmd_proto.UnionCmd[];
}

