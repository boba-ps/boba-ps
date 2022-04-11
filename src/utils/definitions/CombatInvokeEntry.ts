import * as CombatTypeArgument_proto from "./CombatTypeArgument"

import * as ForwardType_proto from "./ForwardType"

export interface CombatInvokeEntry {
	argumentType?: CombatTypeArgument_proto.CombatTypeArgument;
	forwardType?: ForwardType_proto.ForwardType;
	combatData?: Buffer;
}

