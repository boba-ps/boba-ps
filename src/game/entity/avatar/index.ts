import {
  AvatarEnterSceneInfo,
  AvatarInfo,
  ProtEntityType,
  SceneAvatarInfo,
  SceneEntityInfo,
  SceneTeamAvatar,
} from "boba-protos";
import { EntityAvatarHandle } from "..";
import { DbEntry } from "../..";
import type { Db } from "../../../db";
import type { DbAvatar, DbAvatarProp, DbAvatarFightProp } from "../../../db/schema";
import { PlayerHandle } from "../../player";
import { ItemReliquaryHandle, ItemWeaponHandle } from "../../player/item";
import { PropValueProtoBuilder } from "../../propProto";
import { FightPropValueProtoBuilder } from "../fightPropProto";

export class AvatarHandle extends DbEntry<DbAvatar> {
  get skillDepotRid() {
    return this.value.skill_depot_rid;
  }

  get flycloakRid() {
    return this.value.flycloak_rid;
  }

  get lifeStateRid() {
    return this.value.life_state_rid;
  }

  getProps() {
    return this.query("select * from avatar_props where avatar_id = ?")
      .all(this.id)
      .map((v) => new AvatarPropHandle(this.db, v, this.id));
  }

  setProp(type: number, ival: number) {
    return new AvatarPropHandle(
      this.db,
      this.query(
        `insert into avatar_props (avatar_id, type, ival)
         values ($avatar_id, $type, $ival)
         on conflict (avatar_id, type)
         do update set ival = $ival, fval = null
         returning *`
      ).get({ avatar_id: this.id, type, ival }),
      this.id
    );
  }

  getFightProps() {
    return this.query("select * from avatar_fight_props where avatar_id = ?")
      .all(this.id)
      .map((v) => new AvatarFightPropHandle(this.db, v, this.id));
  }

  setFightProp(type: number, value: number) {
    return new AvatarFightPropHandle(
      this.db,
      this.query(
        `insert into avatar_fight_props (avatar_id, type, value)
         values ($avatar_id, $type, $value)
         on conflict (avatar_id, type)
         do update set value = $value
         returning *`
      ).get({ avatar_id: this.id, type, value }),
      this.id
    );
  }

  getWeapon() {
    return new ItemWeaponHandle(
      this.db,
      this.query("select * from item_weapons where id = ?").get(this.value.weapon_id)
    );
  }

  getReliquaries() {
    return this.query("select * from item_reliquaries where id in (?, ?, ?, ?, ?)")
      .all(this.value.bracer_id, this.value.necklace_id, this.value.shoes_id, this.value.ring_id, this.value.dress_id)
      .map((v) => new ItemReliquaryHandle(this.db, v));
  }

  getEquips() {
    return [this.getWeapon(), ...this.getReliquaries()];
  }

  getEntity() {
    return new EntityAvatarHandle(this.db, this.query("select * from entity_avatars where avatar_id = ?").get(this.id));
  }

  getOwner() {
    const owner = this.query("select * from players where id = ?").get(this.value.player_id);
    return new PlayerHandle(this.db, owner);
  }

  createInfoProto() {
    return AvatarInfo.create({
      avatarId: this.value.rid,
      avatarType: this.value.type,
      guid: BigInt(this.id),
      lifeState: this.lifeStateRid,
      propMap: PropValueProtoBuilder.createMap(this.getProps().map((prop) => prop.value)),
      fightPropMap: FightPropValueProtoBuilder.createMap(this.getFightProps().map((prop) => prop.value)),
      equipGuidList: this.getEquips().map(({ id }) => BigInt(id)),
      skillDepotId: this.skillDepotRid,
      wearingFlycloakId: this.flycloakRid,
      bornTime: this.value.born_time,
      // TODO: fetterInfo, skillLevelMap, pendingPromoteRewardList
    });
  }

  createEnterSceneInfoProto() {
    const weapon = this.getWeapon();

    return AvatarEnterSceneInfo.create({
      avatarGuid: BigInt(this.id),
      avatarEntityId: this.getEntity().id,
      weaponGuid: BigInt(weapon.id),
      weaponEntityId: weapon.getEntity().id,
    });
  }

  createSceneTeamProto() {
    const owner = this.getOwner();
    const weapon = this.getWeapon();
    const active = owner.getActiveTeam().getActiveAvatar()?.id === this.id;

    return SceneTeamAvatar.create({
      playerUid: owner.id,
      sceneId: owner.value.scene_rid,
      avatarGuid: BigInt(this.value.id),
      entityId: this.getEntity().id,
      weaponGuid: BigInt(weapon.id),
      weaponEntityId: weapon.getEntity().id,
      avatarInfo: this.createInfoProto(),
      sceneAvatarInfo: this.createSceneAvatarInfoProto(),
      sceneEntityInfo: this.createSceneEntityInfoProto(),
      isPlayerCurAvatar: active,
      isOnScene: active,
      abilityControlBlock: {
        abilityEmbryoList: [
          { abilityId: 1, abilityNameHash: 4291357363, abilityOverrideNameHash: 1178079449 },
          { abilityId: 2, abilityNameHash: 1410219662, abilityOverrideNameHash: 1178079449 },
          { abilityId: 3, abilityNameHash: 1474894886, abilityOverrideNameHash: 1178079449 },
          { abilityId: 4, abilityNameHash: 3832178184, abilityOverrideNameHash: 1178079449 },
          { abilityId: 5, abilityNameHash: 2306062007, abilityOverrideNameHash: 1178079449 },
          { abilityId: 6, abilityNameHash: 3105629177, abilityOverrideNameHash: 1178079449 },
          { abilityId: 7, abilityNameHash: 3771526669, abilityOverrideNameHash: 1178079449 },
          { abilityId: 8, abilityNameHash: 100636247, abilityOverrideNameHash: 1178079449 },
          { abilityId: 9, abilityNameHash: 1564404322, abilityOverrideNameHash: 1178079449 },
          { abilityId: 10, abilityNameHash: 497711942, abilityOverrideNameHash: 1178079449 },
          { abilityId: 11, abilityNameHash: 1142761247, abilityOverrideNameHash: 1178079449 },
          { abilityId: 12, abilityNameHash: 518324758, abilityOverrideNameHash: 1178079449 },
          { abilityId: 13, abilityNameHash: 3276790745, abilityOverrideNameHash: 1178079449 },
          { abilityId: 14, abilityNameHash: 3429175060, abilityOverrideNameHash: 1178079449 },
          { abilityId: 15, abilityNameHash: 3429175061, abilityOverrideNameHash: 1178079449 },
          { abilityId: 16, abilityNameHash: 4253958193, abilityOverrideNameHash: 1178079449 },
          { abilityId: 17, abilityNameHash: 209033715, abilityOverrideNameHash: 1178079449 },
          { abilityId: 18, abilityNameHash: 900298203, abilityOverrideNameHash: 1178079449 },
          { abilityId: 19, abilityNameHash: 825255509, abilityOverrideNameHash: 1178079449 },
        ],
      },
      // TODO: abilityControlBlock
    });
  }

  createSceneAvatarInfoProto() {
    const owner = this.getOwner();
    const peerId = owner.getPeerIndex();

    return SceneAvatarInfo.create({
      uid: owner.id,
      avatarId: this.value.rid,
      guid: BigInt(this.id),
      peerId: typeof peerId === "number" ? peerId + 1 : 0,
      equipIdList: this.getEquips().map(({ value }) => value.rid),
      weapon: this.getWeapon().createSceneWeaponInfoProto(),
      reliquaryList: this.getReliquaries().map((relic) => relic.createSceneReliquaryInfoProto()),
      bornTime: this.value.born_time,
      skillDepotId: this.value.skill_depot_rid,
      wearingFlycloakId: this.value.flycloak_rid,
      skillLevelMap: {
        "10067": 1,
        "10068": 1,
        "100553": 1,
      },
      // TODO: talentIdList, skillLevelMap
    });
  }

  createSceneEntityInfoProto() {
    const entity = this.getEntity();

    return SceneEntityInfo.create({
      entityId: entity.id,
      entityType: ProtEntityType.PROT_ENTITY_AVATAR,
      entity: {
        oneofKind: "avatar",
        avatar: this.createSceneAvatarInfoProto(),
      },
      entityAuthorityInfo: {
        aiInfo: { isAiOpen: true },
      },
      propList: this.getProps().map((prop) => prop.createPairProto()),
      fightPropList: this.getFightProps().map((prop) => prop.createPairProto()),
      lifeState: 1,
      name: "boba entity",
      motionInfo: {
        pos: {
          x: 2748,
          y: 194,
          z: -1719,
        },
      },
      // TODO: motionInfo, lastMoveSceneTimeMs, lastMoveReliableSeq, lifeState
    });
  }
}

export class AvatarPropHandle extends DbEntry<DbAvatarProp> {
  constructor(db: Db, value: DbAvatarProp, readonly avatarId: number) {
    super(db, value);
  }

  createProto() {
    return PropValueProtoBuilder.create(this.value);
  }

  createPairProto() {
    return PropValueProtoBuilder.createPair(this.value);
  }

  set(ival: number) {
    this.query(
      `insert into avatar_props (avatar_id, type, ival)
       values ($avatar_id, $type, $ival)
       on conflict (avatar_id, type)
       do update set ival = $ival, fval = null`
    ).run({ avatarId: this.avatarId, type: this.value.type, ival });

    this.value.ival = ival;
    this.value.fval = null;
  }
}

export class AvatarFightPropHandle extends DbEntry<DbAvatarFightProp> {
  constructor(db: Db, value: DbAvatarFightProp, readonly avatarId: number) {
    super(db, value);
  }

  createPairProto() {
    return FightPropValueProtoBuilder.createPair(this.value);
  }

  set(value: number) {
    this.query(
      `insert into avatar_fight_props (avatar_id, type, value)
       values ($avatar_id, $type, $value)
       on conflict (avatar_id, type)
       do update set value = $value`
    ).run({ avatarId: this.avatarId, type: this.value.type, value });

    this.value.value = value;
  }
}
