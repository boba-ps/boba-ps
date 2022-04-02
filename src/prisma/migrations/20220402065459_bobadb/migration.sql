-- CreateTable
CREATE TABLE "AvatarFightProp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "prop_id" INTEGER NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvatarInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "character_id" INTEGER NOT NULL,
    "guid" INTEGER NOT NULL,
    "born_time" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvatarProp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "prop_id" INTEGER NOT NULL,
    "prop_value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvatarReliquary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avatar_guid" INTEGER NOT NULL,
    "reliquary_guid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvatarTeamInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "guid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvatarWeapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avatar_guid" INTEGER NOT NULL,
    "weapon_guid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "EquipInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "is_locked" BOOLEAN NOT NULL,
    "level" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL,
    "promote_level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "FurnitureInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ItemInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "guid" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "MaterialInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "has_delete_config" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "OpenState" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "state_id" INTEGER NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "nickname" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "namecard_id" INTEGER NOT NULL,
    "finish_achievement_num" INTEGER NOT NULL,
    "tower_floor_index" INTEGER NOT NULL,
    "tower_level_index" INTEGER NOT NULL,
    "avatar_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerProp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "prop_id" INTEGER NOT NULL,
    "prop_value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ReliquaryInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "main_prop_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ReliquaryProp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" INTEGER NOT NULL,
    "prop_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SceneInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "scene_id" INTEGER NOT NULL,
    "scene_token" INTEGER NOT NULL,
    "pos_x" INTEGER NOT NULL,
    "pos_y" INTEGER NOT NULL,
    "pos_z" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TeamInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "oid" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TeamSelectionInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" INTEGER NOT NULL,
    "avatar" INTEGER NOT NULL,
    "team" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "WeaponAffixInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "affix_id" INTEGER NOT NULL,
    "affix_value" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerInfo_uid_key" ON "PlayerInfo"("uid");
