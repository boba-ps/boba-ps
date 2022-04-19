import type { PropValue } from "boba-protos";

export type GenericProp = {
  type: number;
  ival?: number | bigint | null;
  fval?: number | null;
};

export function createPropProto(prop: GenericProp): PropValue {
  let { type, ival, fval } = prop;

  if (typeof fval === "number") {
    return {
      type,
      val: BigInt(~~fval), // is this correct?
      value: { oneofKind: "fval", fval },
    };
  }

  if (typeof ival === "number" || typeof ival === "bigint") {
    ival = BigInt(ival);

    return {
      type,
      val: ival,
      value: { oneofKind: "ival", ival },
    };
  }

  return {
    type,
    val: 0n,
    value: { oneofKind: "ival", ival: 0n },
  };
}

export function createPropProtoMap(props: GenericProp[]) {
  const map: Record<number, PropValue> = {};

  for (const prop of props) {
    map[prop.type] = createPropProto(prop);
  }

  return map;
}
