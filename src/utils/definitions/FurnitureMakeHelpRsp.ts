import * as FurnitureMakeHelpData_proto from "./FurnitureMakeHelpData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4762
}

export interface FurnitureMakeHelpRsp {
	retcode?: number;
	helpDataList?: FurnitureMakeHelpData_proto.FurnitureMakeHelpData[];
}

