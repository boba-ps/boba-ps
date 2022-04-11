import * as HomePlantFieldData_proto from "./HomePlantFieldData"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4830
}

export interface HomePlantInfoRsp {
	retcode?: number;
	fieldList?: HomePlantFieldData_proto.HomePlantFieldData[];
}

