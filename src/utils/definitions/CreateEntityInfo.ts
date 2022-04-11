import * as CreateGadgetInfo_proto from "./CreateGadgetInfo"

import * as Vector_proto from "./Vector"

export interface CreateEntityInfo {
	monsterId?: number;
	npcId?: number;
	gadgetId?: number;
	itemId?: number;
	gadget?: CreateGadgetInfo_proto.CreateGadgetInfo;
	level?: number;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
	sceneId?: number;
	roomId?: number;
	clientUniqueId?: number;
}

