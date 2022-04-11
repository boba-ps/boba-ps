import * as ReportReasonType_proto from "./ReportReasonType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4021
}

export interface PlayerReportReq {
	targetUid?: number;
	reason?: ReportReasonType_proto.ReportReasonType;
	content?: string;
	targetHomeModuleId?: number;
	targetHomeModuleName?: string;
}

