import * as ResVersionConfig_proto from "./ResVersionConfig"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 193
}

export enum DataResVersionOpType {
	OP_TYPE_NONE = 0,
	OP_TYPE_RELOGIN = 1,
	OP_TYPE_MP_RELOGIN = 2
}

export interface DataResVersionNotify {
	clientDataVersion?: number;
	clientSilenceDataVersion?: number;
	clientMd5?: string;
	clientSilenceMd5?: string;
	resVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
	clientVersionSuffix?: string;
	clientSilenceVersionSuffix?: string;
	isDataNeedRelogin?: boolean;
	opType?: DataResVersionOpType;
}

