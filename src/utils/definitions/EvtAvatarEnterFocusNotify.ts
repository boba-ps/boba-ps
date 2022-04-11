import * as ForwardType_proto from "./ForwardType"

import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 316
}

export interface EvtAvatarEnterFocusNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	fastFocus?: boolean;
	useFocusSticky?: boolean;
	useAutoFocus?: boolean;
	useGyro?: boolean;
	canMove?: boolean;
	showCrossHair?: boolean;
	focusForward?: Vector_proto.Vector;
	enterNormalFocusShoot?: boolean;
	enterHoldingFocusShoot?: boolean;
	disableAnim?: boolean;
}

