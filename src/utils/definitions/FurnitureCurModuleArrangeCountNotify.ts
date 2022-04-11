import * as Uint32Pair_proto from "./Uint32Pair"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4596
}

export interface FurnitureCurModuleArrangeCountNotify {
	furnitureArrangeCountList?: Uint32Pair_proto.Uint32Pair[];
}

