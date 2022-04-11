import * as ClientReconnectReason_proto from "./ClientReconnectReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 26
}

export interface ClientReconnectNotify {
	reason?: ClientReconnectReason_proto.ClientReconnectReason;
}

