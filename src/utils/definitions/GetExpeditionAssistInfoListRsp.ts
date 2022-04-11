import * as ExpeditionAssistInfo_proto from "./ExpeditionAssistInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2113
}

export interface GetExpeditionAssistInfoListRsp {
	retcode?: number;
	assistInfoList?: ExpeditionAssistInfo_proto.ExpeditionAssistInfo[];
}

