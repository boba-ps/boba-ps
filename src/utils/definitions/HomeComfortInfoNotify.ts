import * as HomeModuleComfortInfo_proto from "./HomeModuleComfortInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4557
}

export interface HomeComfortInfoNotify {
	moduleInfoList?: HomeModuleComfortInfo_proto.HomeModuleComfortInfo[];
}

