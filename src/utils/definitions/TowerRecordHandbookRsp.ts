import * as TowerMonthlyDetail_proto from "./TowerMonthlyDetail"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2455
}

export interface TowerRecordHandbookRsp {
	retcode?: number;
	monthlyDetailList?: TowerMonthlyDetail_proto.TowerMonthlyDetail[];
}

