import * as GroupLinkBundle_proto from "./GroupLinkBundle"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5793
}

export interface GroupLinkChangeNotify {
	bundle?: GroupLinkBundle_proto.GroupLinkBundle;
}

