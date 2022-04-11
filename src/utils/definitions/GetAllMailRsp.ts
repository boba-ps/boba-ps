import * as MailData_proto from "./MailData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1426
}

export interface GetAllMailRsp {
	retcode?: number;
	mailList?: MailData_proto.MailData[];
	isTruncated?: boolean;
}

