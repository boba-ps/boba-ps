import * as MailData_proto from "./MailData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1418
}

export interface MailChangeNotify {
	mailList?: MailData_proto.MailData[];
	delMailIdList?: number[];
}

