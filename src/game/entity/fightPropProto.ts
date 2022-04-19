import type { FightPropPair } from "boba-protos";

export type GenericFightProp = {
  type: number;
  value: number;
};

export function createFightPropPairProto(prop: GenericFightProp): FightPropPair {
  const { type, value } = prop;
  return { propType: type, propValue: value };
}

export function createFightPropMap(props: GenericFightProp[]) {
  const map: Record<number, number> = {};

  for (const { type, value } of props) {
    map[type] = value;
  }

  return map;
}
