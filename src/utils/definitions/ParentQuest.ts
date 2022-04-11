import * as ChildQuest_proto from "./ChildQuest"

import * as ParentQuestRandomInfo_proto from "./ParentQuestRandomInfo"

export interface ParentQuest {
	parentQuestId?: number;
	childQuestList?: ChildQuest_proto.ChildQuest[];
	isFinished?: boolean;
	isRandom?: boolean;
	randomInfo?: ParentQuestRandomInfo_proto.ParentQuestRandomInfo;
	questVar?: number[];
	parentQuestState?: number;
	questVarSeq?: number;
	timeVarMap?: number;
}

