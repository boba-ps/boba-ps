import * as PropValue_proto from "./PropValue"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 142
}

export interface PlayerDataNotify {
	nickName?: string;
	serverTime?: number;
	isFirstLoginToday?: boolean;
	regionId?: number;
	propMap?: PropValue_proto.PropValue;
}

