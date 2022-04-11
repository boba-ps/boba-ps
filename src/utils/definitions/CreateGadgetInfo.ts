import * as GadgetBornType_proto from "./GadgetBornType"

export interface Chest {
	chestDropId?: number;
	isShowCutscene?: boolean;
}

export interface CreateGadgetInfo {
	bornType?: GadgetBornType_proto.GadgetBornType;
	chest?: Chest;
}

