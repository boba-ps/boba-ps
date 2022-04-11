import * as Vector_proto from "./Vector"

import * as PBNavMeshPoly_proto from "./PBNavMeshPoly"

export interface PBNavMeshTile {
	vecs?: Vector_proto.Vector[];
	polys?: PBNavMeshPoly_proto.PBNavMeshPoly[];
}

