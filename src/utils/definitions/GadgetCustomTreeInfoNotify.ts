import * as CustomGadgetTreeInfo_proto from "./CustomGadgetTreeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 809
}

export interface GadgetCustomTreeInfoNotify {
	gadgetEntityId?: number;
	customGadgetTreeInfo?: CustomGadgetTreeInfo_proto.CustomGadgetTreeInfo;
}

