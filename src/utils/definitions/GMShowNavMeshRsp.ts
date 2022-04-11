import * as PBNavMeshTile_proto from "./PBNavMeshTile"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2352
}

export interface GMShowNavMeshRsp {
	retcode?: number;
	tiles?: PBNavMeshTile_proto.PBNavMeshTile[];
}

