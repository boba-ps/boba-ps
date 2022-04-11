import * as SignInInfo_proto from "./SignInInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2501
}

export interface GetSignInRewardRsp {
	retcode?: number;
	signInInfo?: SignInInfo_proto.SignInInfo;
}

