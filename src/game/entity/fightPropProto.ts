import { FightPropPair } from "boba-protos";

export type GenericFightProp = {
  type: number;
  value: number;
};

export class FightPropValueProtoBuilder {
  static fval(type: number, value: number) {
    return FightPropPair.create({ propType: type, propValue: value });
  }

  static createPair({ type, value }: GenericFightProp) {
    return this.fval(type, value);
  }

  static default(type: number) {
    return this.fval(type, 0);
  }

  static createMap(props: GenericFightProp[]) {
    const map: Record<number, number> = {};

    for (const { type, value } of props) {
      map[type] = value;
    }

    return map;
  }
}
