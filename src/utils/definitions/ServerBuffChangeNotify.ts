import * as ServerBuff_proto from "./ServerBuff"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 334
}

export enum ServerBuffChangeType {
	ADD_SERVER_BUFF = 0,
	DEL_SERVER_BUFF = 1
}

export interface ServerBuffChangeNotify {
	serverBuffChangeType?: ServerBuffChangeType;
	avatarGuidList?: number[];
	serverBuffList?: ServerBuff_proto.ServerBuff[];
	isCreatureBuff?: boolean;
	entityIdList?: number[];
}

