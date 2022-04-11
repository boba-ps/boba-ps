import * as NpcPositionInfo_proto from "./NpcPositionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 600
}

export interface GetSceneNpcPositionRsp {
	retcode?: number;
	sceneId?: number;
	npcInfoList?: NpcPositionInfo_proto.NpcPositionInfo[];
}

