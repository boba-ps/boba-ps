import * as Item_proto from "./Item"

import * as TrialAvatarGrantRecord_proto from "./TrialAvatarGrantRecord"

export interface TrialAvatarInfo {
	trialAvatarId?: number;
	trialEquipList?: Item_proto.Item[];
	grantRecord?: TrialAvatarGrantRecord_proto.TrialAvatarGrantRecord;
}

