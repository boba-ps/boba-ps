import { OnlinePlayerInfo } from "boba-protos";
import { DbEntry, DbWrapper } from "..";
import type { Db } from "../../db";
import { simpleDecodeUIntArray } from "../../db/encoding";
import type { DbPlayer, DbPlayerOpenState, DbPlayerProp } from "../../db/schema";
import { AvatarHandle } from "../entity/avatar";
import { AvatarTeamHandle } from "../entity/avatar/team";
import { PropValueProtoBuilder } from "../propProto";
import { ItemMaterialHandle, ItemReliquaryHandle, ItemWeaponHandle } from "./item";
import PlayerProps from "./playerProps.json";

// this class was extracted out of PlayerHandle because of circular dependency
// PlayerHandle <- WorldHandle.getPlayers() <- PlayerHandle.getJoinedWorld()
export class PlayerHandleBase extends DbEntry<DbPlayer> {
  readonly inventory = new PlayerInventoryWrapper(this.db, this.id);

  get flycloakRids() {
    return simpleDecodeUIntArray(this.value.flycloak_rids);
  }

  get costumeRids() {
    return simpleDecodeUIntArray(this.value.costume_rids);
  }

  getProps() {
    return this.query("select * from player_props where player_id = ?")
      .all(this.id)
      .map((v) => new PlayerPropHandle(this.db, v));
  }

  getProp(type: number) {
    const prop = this.query("select * from player_props where player_id = ? and type = ?").get(this.id, type);
    return prop ? new PlayerPropHandle(this.db, prop) : undefined;
  }

  getLevel() {
    return this.getProp(PlayerProps.PlayerLevel)?.value.ival ?? 0;
  }

  getOpenStates() {
    return this.query("select * from player_open_states where player_id = ?")
      .all(this.id)
      .map((v) => new PlayerOpenStateHandle(this.db, v));
  }

  getAvatars() {
    return this.query("select * from avatars where player_id = ?")
      .all(this.id)
      .map((v) => new AvatarHandle(this.db, v));
  }

  getTeams() {
    return this.query("select * from avatar_teams where player_id = ? order by sort asc")
      .all(this.id)
      .map((v) => new AvatarTeamHandle(this.db, v));
  }

  getActiveTeam() {
    const teams = this.getTeams();
    return teams[this.value.active_team] ?? teams[0]!;
  }

  isSceneEnterToken(token: number) {
    return this.value.scene_enter_token === token;
  }

  getNextSceneEnterToken(): number {
    const { scene_enter_token: token } = this.query(
      `update players
       set scene_enter_token = (scene_enter_token + 1) % 10000
       where id = ?
       returning scene_enter_token`
    ).get(this.id);

    this.value.scene_enter_token = token;
    return token;
  }

  getPeerIndex(): number | undefined {
    return this.query("select peer_index from world_players where player_id = ?").get(this.id)?.peer_index;
  }

  createOnlineInfoProto() {
    return OnlinePlayerInfo.create({
      uid: this.id,
      nickname: this.value.nickname,
      signature: this.value.signature,
      avatarId: this.value.main_char_rid,
      playerLevel: this.getLevel(),
      worldLevel: this.value.world_level,
      curPlayerNumInWorld: 1,
      // TODO: mpSettingsType, profilePicture, curPlayerNumInWorld
    });
  }
}

export class PlayerPropHandle extends DbEntry<DbPlayerProp> {
  createProto() {
    return PropValueProtoBuilder.create(this.value);
  }
}

export class PlayerOpenStateHandle extends DbEntry<DbPlayerOpenState> {}

export class PlayerInventoryWrapper extends DbWrapper {
  constructor(db: Db, readonly playerId: number) {
    super(db);
  }

  getAll() {
    return [...this.getMaterials(), ...this.getEquips()];
  }

  getEquips() {
    return [...this.getWeapons(), ...this.getReliquaries()];
  }

  getMaterials() {
    return this.query("select * from item_materials where player_id = ?")
      .all(this.playerId)
      .map((v) => new ItemMaterialHandle(this.db, v));
  }

  getWeapons() {
    return this.query("select * from item_weapons where player_id = ?")
      .all(this.playerId)
      .map((v) => new ItemWeaponHandle(this.db, v));
  }

  getReliquaries() {
    return this.query("select * from item_reliquaries where player_id = ?")
      .all(this.playerId)
      .map((v) => new ItemReliquaryHandle(this.db, v));
  }
}
