import * as MechanicusInfo_proto from "./MechanicusInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3918
}

export interface GetMechanicusInfoRsp {
	retcode?: number;
	mechanicusInfo?: MechanicusInfo_proto.MechanicusInfo;
}

