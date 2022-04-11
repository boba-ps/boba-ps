import * as GivingRecord_proto from "./GivingRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 197
}

export interface GivingRecordChangeNotify {
	givingRecord?: GivingRecord_proto.GivingRecord;
	isDeactive?: boolean;
}

