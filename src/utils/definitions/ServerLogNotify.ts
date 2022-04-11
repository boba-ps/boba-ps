import * as ServerLogType_proto from "./ServerLogType"

import * as ServerLogLevel_proto from "./ServerLogLevel"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 12
}

export interface ServerLogNotify {
	logType?: ServerLogType_proto.ServerLogType;
	logLevel?: ServerLogLevel_proto.ServerLogLevel;
	serverLog?: string;
}

