import * as FurnitureMakeMakeInfo_proto from "./FurnitureMakeMakeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4492
}

export interface FunitureMakeMakeInfoChangeNotify {
	makeInfo?: FurnitureMakeMakeInfo_proto.FurnitureMakeMakeInfo;
}

