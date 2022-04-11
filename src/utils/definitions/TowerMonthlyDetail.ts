import * as TowerMonthlyBrief_proto from "./TowerMonthlyBrief"

import * as TowerMonthlyCombatRecord_proto from "./TowerMonthlyCombatRecord"

export interface TowerMonthlyDetail {
	monthlyBrief?: TowerMonthlyBrief_proto.TowerMonthlyBrief;
	monthlyCombatRecord?: TowerMonthlyCombatRecord_proto.TowerMonthlyCombatRecord;
}

