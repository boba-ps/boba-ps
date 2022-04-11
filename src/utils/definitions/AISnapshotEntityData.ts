import * as AISnapshotEntitySkillCycle_proto from "./AISnapshotEntitySkillCycle"

export interface AISnapshotEntityData {
	entityId?: number;
	realTime?: number;
	tickTime?: number;
	tactic?: number;
	distanceToPlayer?: number;
	threatListSize?: number;
	threatTargetId?: number;
	aiTargetId?: number;
	attackTargetId?: number;
	movedDistance?: number;
	finishedSkillCycles?: AISnapshotEntitySkillCycle_proto.AISnapshotEntitySkillCycle[];
	hittingAvatars?: number;
}

