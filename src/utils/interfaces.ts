export interface AvatarFightProp {
    guid:number,
    prop_id:number,
    value:number
}

export interface AvatarInfo {
    uid:number,
    character_id:number,
    guid?:number | undefined,
    born_time:number,
}

export interface AvatarProp {
    guid:number,
    prop_id:number,
    prop_value:number,
}

export interface AvatarReliquary {
    avatar_guid:number,
    reliquary_guid:number,
}

export interface AvatarTeamInfo {
    uid:number,
    team_id:number,
    guid:number,
}

export interface AvatarWeapon {
    avatar_guid:number,
    weapon_guid:number,
}

export interface EquipInfo {
    guid:number,
    is_locked:boolean,
    level:number,
    exp:number,
    promote_level:number,
}

export interface FurnitureInfo {
    guid:number,
    count:number
}

export interface ItemInfo {
    uid:number,
    guid:number,
    item_id:number,
}

export interface MaterialInfo {
    guid:number,
    count:number,
    has_delete_config:boolean,
}

export interface OpenState {
    uid:number,
    state_id:number,
    value :number,
}

export interface PlayerInfo {
    uid:number,
    nickname:string,
    signature:string,
    birthday:Date,
    namecard_id:number,
    finish_achievement_num:number
    tower_floor_index:number
    tower_level_index:number
    avatar_id:number
}

export interface PlayerProp {
    uid:number
    prop_id:number
    prop_value:number
}

export interface ReliquaryInfo {
    guid:number
    main_prop_id:number
}

export interface ReliquaryProp {
    guid:number
    prop_id:number
}

export interface SceneInfo {
    uid:number
    scene_id:number
    scene_token:number
    pos_x:number
    pos_y:number
    pos_z:number
}

export interface TeamInfo {
    uid:number
    oid:number
    name:string
}

export interface TeamSelectionInfo {
    uid:number
    avatar:number
    team:number
}

export interface WeaponAffixInfo {
    affix_id:number
    affix_value:number
}
