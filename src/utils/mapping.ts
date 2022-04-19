/** Strongly typed name/id lookup table. */
export class IdMapping<Name extends string, Id extends string | number> {
  readonly idToName = {} as Record<Id, Name>;

  constructor(readonly nameToId: Record<Name, Id>) {
    for (const key in nameToId) {
      this.idToName[nameToId[key]] = key;
    }
  }

  name(id: Id) {
    return this.idToName[id];
  }

  asName(name: string) {
    return this.hasName(name) ? name : undefined;
  }

  hasName(name: string): name is Name {
    return name in this.nameToId;
  }

  id(name: Name) {
    return this.nameToId[name];
  }

  asId(id: string | number) {
    return this.hasId(id) ? id : undefined;
  }

  hasId(id: string | number): id is Id {
    return id in this.idToName;
  }
}
