import * as AttackResult_proto from "./AttackResult"

export interface EvtBeingHitInfo {
	peerId?: number;
	attackResult?: AttackResult_proto.AttackResult;
	frameNum?: number;
}

