import * as ReunionPrivilegeInfo_proto from "./ReunionPrivilegeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5084
}

export interface GetReunionPrivilegeInfoRsp {
	retcode?: number;
	privilegeInfo?: ReunionPrivilegeInfo_proto.ReunionPrivilegeInfo;
}

