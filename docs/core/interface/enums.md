# Enums

### enum eCColor

```ts
export enum eCColor {
  White = "^0",
  Red = "^1",
  Green = "^2",
  Yellow = "^3",
  Blue = "^4",
  LightBlue = "^5",
  Purple = "^6",
  White2 = "^7",
  Orange = "^8",
  Grey = "^9",
}
```

### eAmmoType

```ts
export enum eAmmoType {
  AMMO_PISTOL = 0x743d4f54,
  AMMO_SMG = 0x6c7d23b8,
  AMMO_RIFLE = 0xd05319f,
  AMMO_MG = 0x6aa1343f,
  AMMO_SHOTGUN = 0x90083d3b,
  AMMO_STUNGUN = 0xb02eade0,
  AMMO_SNIPER = 0x4c98087b,
  AMMO_SNIPER_REMOTE = 0xfeda7d30,
  AMMO_GRENADELAUNCHER = 0x3bcca5ee,
  AMMO_GRENADELAUNCHER_SMOKE = 0x313fd340,
  AMMO_RPG = 0x67dd81f2,
  AMMO_STINGER = 0x914c813a,
  AMMO_MINIGUN = 0x9fc5c882,
  AMMO_GRENADE = 0x3bd313b1,
  AMMO_STICKYBOMB = 0x5424b617,
  AMMO_SMOKEGRENADE = 0xe60e08a6,
  AMMO_BZGAS = 0x9b747ea4,
  AMMO_MOLOTOV = 0x5633f9d5,
  AMMO_FIREEXTINGUISHER = 0x5106b43c,
  AMMO_PETROLCAN = 0xca6318a1,
  AMMO_BALL = 0xff956666,
  AMMO_FLARE = 0x6bccf76f,
  AMMO_TANK = 0xa81b4220,
  AMMO_SPACE_ROCKET = 0x1f75106c,
  AMMO_PLANE_ROCKET = 0x47735976,
  AMMO_PLAYER_LASER = 0xf624d80a,
  AMMO_ENEMY_LASER = 0xae2ea48c,
  AMMO_BIRD_CRAP = 0x4298c094,
  AMMO_PIPEBOMB = 0x155663f8,
  AMMO_HOMINGLAUNCHER = 0x99150e2d,
  AMMO_PROXMINE = 0xaf2208a7,
  AMMO_SNOWBALL = 0x8218416d,
  AMMO_RIFLE_ARMORPIERCING = 0x1941d244,
  AMMO_RIFLE_FMJ = 0x5e962ddc,
  AMMO_RIFLE_INCENDIARY = 0x92f129cd,
  AMMO_RIFLE_TRACER = 0xb0198d5f,
  AMMO_SNIPER_ARMORPIERCING = 0xa6bcbda9,
  AMMO_SNIPER_FMJ = 0xf5f1c616,
  AMMO_SNIPER_INCENDIARY = 0x2f7ca4a6,
  AMMO_SNIPER_TRACER = 0x469293cd,
  AMMO_SHOTGUN_ARMORPIERCING = 0x72a3a760,
  AMMO_SHOTGUN_EXPLOSIVE = 0xed906955,
  AMMO_SHOTGUN_HOLLOWPOINT = 0x7c867272,
  AMMO_SHOTGUN_INCENDIARY = 0xdbacd794,
  AMMO_PISTOL_FMJ = 0xbc7af403,
  AMMO_PISTOL_HOLLOWPOINT = 0xce23b916,
  AMMO_PISTOL_INCENDIARY = 0xab8ea0f9,
  AMMO_PISTOL_TRACER = 0xb8dcee2b,
  AMMO_MG_ARMORPIERCING = 0x2ec80a10,
  AMMO_MG_FMJ = 0xdfd80b5,
  AMMO_MG_INCENDIARY = 0x57237470,
  AMMO_MG_TRACER = 0x4919b4eb,
  AMMO_SNIPER_EXPLOSIVE = 0xadd16cb9,
  AMMO_SMG_FMJ = 0x2d31add9,
  AMMO_SMG_HOLLOWPOINT = 0x27f43e92,
  AMMO_SMG_INCENDIARY = 0xec2875e7,
  AMMO_SMG_TRACER = 0x5d9106d1,
  AMMO_FLAREGUN = 0x45f0e965,
  AMMO_FIREWORK = 0xaf23ee0f,
  AMMO_RAILGUN = 0x794446fd,
}
```

### EFaceFeatures

```ts
export enum EFaceFeatures {
  "noseWidth",
  "nosePeakHigh",
  "nosePeakSize",
  "noseBoneHigh",
  "nosePeakLowering",
  "noseBoneTwist",
  "eyeBrownHigh",
  "eyeBrownForward",
  "cheeksBoneHigh",
  "cheeksBoneWidth",
  "cheeksWidth",
  "eyesOpening",
  "lipsThickness",
  "jawBoneWidth",
  "jawBoneBackSize",
  "chinBoneLowering",
  "chinBoneLenght",
  "chinBoneSize",
  "chinHole",
  "neckThickness",
}
```

### EHeadOverlay

```ts
export const enum EHeadOverlay {
  "blemishes",
  "beard",
  "eyebrows",
  "ageing",
  "makeUp",
  "blush",
  "complexion",
  "sunDamage",
  "lipstick",
  "moleAndFreckles",
  "chestHair",
  "bodyBlemishes",
  "addBodyBlemishes",
}
```

### EEyeColor

```ts
export const enum EEyeColor {
  "Green",
  "Emerald",
  "LightBlue",
  "OceanBlue",
  "LightBrown",
  "DarkBrown",
  "Hazel",
  "DarkGray",
  "LightGray",
  "Pink",
  "Yellow",
  "Purple",
  "Blackout",
  "ShadesofGray",
  "TequilaSunrise",
  "Atomic",
  "Warp",
  "ECola",
  "SpaceRanger",
  "YingYang",
  "Bullseye",
  "Lizard",
  "Dragon",
  "ExtraTerrestrial",
  "Goat",
  "Smiley",
  "Possessed",
  "Demon",
  "Infected",
  "Alien",
  "Undead",
  "Zombie",
}
```

### EColorType

```ts
export const enum EColorType {
  blemishes = 0,
  beard = 1,
  eyebrows = 1,
  ageing = 0,
  makeUp = 0,
  blush = 2,
  complexion = 0,
  sunDamage = 0,
  lipstick = 2,
  moleAndFreckles = 0,
  chestHair = 1,
  bodyBlemishes = 0,
  addBodyBlemishes = 0,
}
```

### EPlayerInventorySlot

```ts
export enum EPlayerInventorySlot {
  FS_0 = "FS_0",
  FS_1 = "FS_1",
  FS_2 = "FS_2",
  FS_3 = "FS_3",
  FS_4 = "FS_4",
  PK_0 = "PK_0",
  PK_1 = "PK_1",
  PK_2 = "PK_2",
  PK_3 = "PK_3",
  PK_4 = "PK_4",
  PK_5 = "PK_5",
  HAT = "HAT",
  GLASS = "GLASS",
  EAR = "EAR",
  WATCH = "WATCH",
  BRACELET = "BRACELET",
  MASK = "MASK",
  TORSOR = "TORSOR",
  LEG = "LEG",
  BAG = "BAG",
  SHOES = "SHOES",
  ACCESSORY = "ACCESSORY",
  UNDERSHIRT = "UNDERSHIRT",
  KEVLAR = "KEVLAR",
  DECAL = "DECAL",
  TOP = "TOP",
  EXTEND = "EXTEND",
  BP_0 = "BP_0",
  BP_1 = "BP_1",
  BP_2 = "BP_2",
  BP_3 = "BP_3",
  BP_4 = "BP_4",
  BP_5 = "BP_5",
  BP_6 = "BP_6",
  BP_7 = "BP_7",
  BP_8 = "BP_8",
  BP_9 = "BP_9",
  BP_10 = "BP_10",
  BP_11 = "BP_11",
  BP_12 = "BP_12",
  BP_13 = "BP_13",
  BP_14 = "BP_14",
  BP_15 = "BP_15",
  BP_16 = "BP_16",
  BP_17 = "BP_17",
  BP_18 = "BP_18",
  BP_19 = "BP_19",
  BP_20 = "BP_20",
  BP_21 = "BP_21",
  BP_22 = "BP_22",
  BP_23 = "BP_23",
  BP_24 = "BP_24",
  BP_25 = "BP_25",
  BP_26 = "BP_26",
  BP_27 = "BP_27",
  BP_28 = "BP_28",
  BP_29 = "BP_29",
  WEAPON = "WEAPON",
  AMMO = "AMMO",
}
```

### EPlayerTransSlot

```ts
export enum EPlayerTransSlot {
  P_0 = "P_0",
  P_1 = "P_1",
  P_2 = "P_2",
  P_3 = "P_3",
  P_4 = "P_4",
  P_5 = "P_5",
  P_6 = "P_6",
  P_7 = "P_7",
  T_0 = "T_0",
  T_1 = "T_1",
  T_2 = "T_2",
  T_3 = "T_3",
  T_4 = "T_4",
  T_5 = "T_5",
  T_6 = "T_6",
  T_7 = "T_7",
}
```

### EInventoryRarity

```ts
export enum EInventoryRarity {
  COMMON,
  UNCOMMON,
  RARE,
  EPIC,
  LEGENDARY,
}
```

### EFaceFeatureId

```ts
export enum EFaceFeatureId {
  noseWidth,
  nosePeakHigh,
  nosePeakSize,
  noseBoneHigh,
  nosePeakLowering,
  noseBoneTwist,
  eyeBrownHigh,
  eyeBrownForward,
  cheeksBoneHigh,
  cheeksBoneWidth,
  cheeksWidth,
  eyesOpening,
  lipsThickness,
  jawBoneWidth,
  jawBoneBackSize,
  chinBoneLowering,
  chinBoneLenght,
  chinBoneSize,
  chinHole,
  neckThickness,
}
```

### EOverlayId

```ts
export enum EOverlayId {
  blemishes,
  beard,
  eyebrows,
  ageing,
  makeUp,
  blush,
  complexion,
  sunDamage,
  lipstick,
  moleAndFreckles,
  chestHair,
  bodyBlemishes,
  addBodyBlemishes,
}
```

### eStatus

```ts
export enum eStatus {
  FAILED,
  SUCCESS,
}
```

### eBlipColor

```ts
export enum eBlipColor {
  White,
  Red,
  Green,
  RedEnemy,
  BlueFriendly,
  Blue,
  RedEnemy2,
  White2,
  RedEnemy3,
  BlueFriendly2,
  Yellow,
  RedEnemy4,
  BlueFriendly3,
  LightRed,
  Violet,
  Pink,
  LightOrange,
  LightBrown,
  LightGreen,
  LightBlue,
  LightPurple,
  DarkPurple,
  Cyan,
  LightYellow,
  Orange,
  LightBlue2,
  DarkPink,
  DarkYellow,
  DarkOrange,
  LightGray,
  LightPink,
  LemonGreen,
  ForestGreen,
  ElectricBlue,
  BrightPurple,
  DarkYellow2,
  DarkBlue,
  DarkCyan,
  LightBrown2,
  LightBlue3,
  LightYellow2,
  LightPink2,
  LightRed2,
  Beige,
  White3,
  Blue2,
  LightGray2,
  DarkGray,
  PinkRed,
  Blue3,
  LightGreen2,
  LightOrange2,
  White4,
  Gold,
  Orange2,
  BrilliantRose,
  Red2,
  BlueFriendly4,
  MediumPurple,
  Salmon,
  DarkGreen,
  BlizzardBlue,
  OracleBlue,
  Silver,
  Brown,
  Blue4,
  EastBay,
  Red3,
  YellowOrange,
  MulberryPink,
  AltoGray,
  JellyBeanBlue,
  DarkOrange2,
  Mamba,
  YellowOrange2,
  RedEnemy5,
  BlueFriendly5,
  Blue5,
  RedEnemy6,
  Blue6,
  RedEnemy7,
  Green2,
  RedEnemy8,
  BlueFriendly6,
  YellowOrange3,
  YellowOrange4,
  TransparentBlack,
  YellowOrange5,
  Blue7,
  Red4,
  Deepred,
  Blue8,
  OracleBlue2,
  TransparentRed,
  TransparentBlue,
  Orange3,
  LightGreen3,
  Purple,
  Blue9,
  TransparentBlack2,
}
```
