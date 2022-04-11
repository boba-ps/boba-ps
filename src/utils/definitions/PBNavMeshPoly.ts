export enum EdgeType {
	INNER = 0,
	TILE_BOUND = 1,
	TILE_BOUND_UNCONNECT = 2
}

export interface PBNavMeshPoly {
	vects?: number[];
	edgeTypes?: EdgeType[];
	area?: number;
}

