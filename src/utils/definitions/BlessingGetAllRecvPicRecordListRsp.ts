import * as BlessingRecvPicRecord_proto from "./BlessingRecvPicRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2164
}

export interface BlessingGetAllRecvPicRecordListRsp {
	retcode?: number;
	recvPicRecordList?: BlessingRecvPicRecord_proto.BlessingRecvPicRecord[];
}

