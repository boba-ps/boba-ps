import { PropPair, PropValue } from "boba-protos";

export type GenericProp = {
  type: number;
  ival?: number | bigint | null;
  fval?: number | null;
};

export class PropValueProtoBuilder {
  static ival(type: number, value: number | bigint) {
    value = BigInt(value);

    return PropValue.create({
      type,
      val: value,
      value: { oneofKind: "ival", ival: value },
    });
  }

  static fval(type: number, value: number) {
    return PropValue.create({
      type,
      val: BigInt(~~value), // this is probably not right
      value: { oneofKind: "fval", fval: value },
    });
  }

  static default(type: number) {
    return this.ival(type, 0n);
  }

  static create({ type, ival, fval }: GenericProp) {
    if (typeof ival === "number" || typeof ival === "bigint") return this.ival(type, ival);
    if (typeof fval === "number") return this.fval(type, fval);
    return this.default(type);
  }

  static createPair(prop: GenericProp) {
    return PropPair.create({ type: prop.type, propValue: this.create(prop) });
  }

  static createMap(props: GenericProp[]) {
    const map: Record<number, PropValue> = {};

    for (const prop of props) {
      map[prop.type] = this.create(prop);
    }

    return map;
  }
}
