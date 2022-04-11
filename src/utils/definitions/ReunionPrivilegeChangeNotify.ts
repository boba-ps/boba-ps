import * as ReunionPrivilegeInfo_proto from "./ReunionPrivilegeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5054
}

export interface ReunionPrivilegeChangeNotify {
	privilegeInfo?: ReunionPrivilegeInfo_proto.ReunionPrivilegeInfo;
}

