export type DbObject = {
  id: number;
};

export type DbAccount = {
  id: number;
  username: string;
  password: Buffer;
  email: string;
  session_token: Buffer;
  login_token: Buffer;
};

export type DbPlayer = {
  id: number;
  account_id: number;
  nickname: string;
  signature: string;
  main_char_rid: number;
  region_rid: number;
  scene_rid: number;
  scene_enter_token: number;
  active_team: number;
  flycloak_rids: Buffer;
  costume_rids: Buffer;
  pos_x: number;
  pos_y: number;
  pos_z: number;
  world_level: number;
};

export type DbPlayerProp = {
  id: number;
  player_id: number;
  type: number;
  ival: number | null;
  fval: number | null;
};

export type DbPlayerOpenState = {
  id: number;
  player_id: number;
  type: number;
  value: number;
};

export type DbItem = {
  id: number;
  type: number;
};

export type DbItemMaterial = {
  id: number;
  player_id: number;
  rid: number;
  count: number;
};

export type DbItemWeapon = {
  id: number;
  player_id: number;
  rid: number;
  exp: number;
  level: number;
  promote_level: number;
  locked: number;
};

export type DbItemReliquary = {
  id: number;
  player_id: number;
  rid: number;
  exp: number;
  level: number;
  promote_level: number;
  main_prop_rid: number;
  append_prop_rids: Buffer;
  locked: number;
};

export type DbAvatar = {
  id: number;
  player_id: number;
  rid: number;
  type: number;
  life_state_rid: number;
  weapon_id: number;
  bracer_id: number | null;
  necklace_id: number | null;
  shoes_id: number | null;
  ring_id: number | null;
  dress_id: number | null;
  skill_depot_rid: number;
  flycloak_rid: number;
  born_time: number;
};

export type DbAvatarProp = {
  id: number;
  avatar_id: number;
  type: number;
  ival: number | null;
  fval: number | null;
};

export type DbAvatarFightProp = {
  id: number;
  avatar_id: number;
  type: number;
  value: number;
};

export type DbAvatarTeam = {
  id: number;
  player_id: number;
  sort: number;
  name: string;
  active_avatar: number;
};

export type DbAvatarTeamLink = {
  id: number;
  team_id: number;
  avatar_id: number;
  sort: number;
};

export type DbWorld = {
  id: number;
  owner_id: number;
  time: number;
};

export type DbWorldProp = {
  id: number;
  world_id: number;
  type: number;
  ival: number | null;
  fval: number | null;
};

export type DbWorldPlayer = {
  player_id: number;
  world_id: number;
  peer_index: number;
};

export type DbEntity = {
  id: number;
  type: number;
};

export type DbEntityAvatar = {
  id: number;
  avatar_id: number;
};

export type DbEntityMonster = {
  id: number;
};

export type DbEntityNpc = {
  id: number;
};

export type DbEntityGadget = {
  id: number;
};

export type DbEntityWeapon = {
  id: number;
  weapon_id: number;
};

export type DbEntityTeam = {
  id: number;
  team_id: number;
};

export type DbEntityLevel = {
  id: number;
  world_id: number;
};
