import * as DraftInviteFailInfo_proto from "./DraftInviteFailInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5484
}

export interface DraftOwnerStartInviteRsp {
	retcode?: number;
	draftId?: number;
	wrongUid?: number;
	inviteFailInfoList?: DraftInviteFailInfo_proto.DraftInviteFailInfo[];
}

