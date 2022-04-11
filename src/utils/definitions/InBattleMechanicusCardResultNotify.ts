import * as InBattleMechanicusCardInfo_proto from "./InBattleMechanicusCardInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5391
}

export interface InBattleMechanicusCardResultNotify {
	playIndex?: number;
	groupId?: number;
	waitBeginTimeUs?: number;
	waitSeconds?: number;
	cardList?: InBattleMechanicusCardInfo_proto.InBattleMechanicusCardInfo[];
	playerConfirmedCardMap?: number;
}

