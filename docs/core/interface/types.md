# Types

### IIventoryType

```ts
export type IIventoryType = "player" | "vehicle" | "property";
```

### IItemType

```ts
export type IItemType =
  | "standard"
  | "weapon"
  | "hat"
  | "glass"
  | "ear"
  | "watch"
  | "bracelet"
  | "mask"
  | "torsor"
  | "leg"
  | "bag"
  | "shoes"
  | "accessory"
  | "undershirt"
  | "kevlar"
  | "decal"
  | "top"
  | "extend"
  | "weapon-component"
  | "weapon-ammo";
```

### INUIPage

```ts
export type INUIPage =
  | "Login"
  | "Register"
  | "CharacterCreator"
  | "PlayerInventory"
  | "WeaponShop"
  | "GroceryStore"
  | "Menu";
```

### IReduxAction

```ts
export type IReduxAction =
  | "setPlayerData"
  | "setPlayerInventory"
  | "setPlayerCoords"
  | "setPlayerMoney"
  | "setPlayerBank"
  | "setPlayerCoin"
  | "setPlayerHealth"
  | "setPlayerArmour"
  | "setPlayerBlackMoney"
  | "setPlayerInventoryWeight"
  | "setPlayerMaxInventoryWeight"
  | "setMenuData"
  | "setMenuElements"
  | "setMenuConversation"
  | "setWeaponShopItems"
  | "setWeaponShopIndex";
```

### IDropReason

```ts
export type IDropReason = "DROP" | "CANCEL";
```

### IMovementMode

```ts
export type IMovementMode = "FLUID" | "SNAP";
```

### IOrganization

```ts
export type IOrganization = "police" | "ambulance" | "mechanic";
```

### ICoords

```ts
export type ICoords = number[];
```

### IGender

```ts
export type IGender = "male" | "female";
```

### IAmmoType

```ts
export type IAmmoType =
  | "AMMO_PISTOL"
  | "AMMO_SMG"
  | "AMMO_RIFLE"
  | "AMMO_MG"
  | "AMMO_SHOTGUN"
  | "AMMO_STUNGUN"
  | "AMMO_SNIPER"
  | "AMMO_SNIPER_REMOTE"
  | "AMMO_GRENADELAUNCHER"
  | "AMMO_GRENADELAUNCHER_SMOKE"
  | "AMMO_RPG"
  | "AMMO_STINGER"
  | "AMMO_MINIGUN"
  | "AMMO_GRENADE"
  | "AMMO_STICKYBOMB"
  | "AMMO_SMOKEGRENADE"
  | "AMMO_BZGAS"
  | "AMMO_MOLOTOV"
  | "AMMO_FIREEXTINGUISHER"
  | "AMMO_PETROLCAN"
  | "AMMO_BALL"
  | "AMMO_FLARE"
  | "AMMO_TANK"
  | "AMMO_SPACE_ROCKET"
  | "AMMO_PLANE_ROCKET"
  | "AMMO_PLAYER_LASER"
  | "AMMO_ENEMY_LASER"
  | "AMMO_BIRD_CRAP"
  | "AMMO_PIPEBOMB"
  | "AMMO_HOMINGLAUNCHER"
  | "AMMO_PROXMINE"
  | "AMMO_SNOWBALL"
  | "AMMO_RIFLE_ARMORPIERCING"
  | "AMMO_RIFLE_FMJ"
  | "AMMO_RIFLE_INCENDIARY"
  | "AMMO_RIFLE_TRACER"
  | "AMMO_SNIPER_ARMORPIERCING"
  | "AMMO_SNIPER_FMJ"
  | "AMMO_SNIPER_INCENDIARY"
  | "AMMO_SNIPER_TRACER"
  | "AMMO_SHOTGUN_ARMORPIERCING"
  | "AMMO_SHOTGUN_EXPLOSIVE"
  | "AMMO_SHOTGUN_HOLLOWPOINT"
  | "AMMO_SHOTGUN_INCENDIARY"
  | "AMMO_PISTOL_FMJ"
  | "AMMO_PISTOL_HOLLOWPOINT"
  | "AMMO_PISTOL_INCENDIARY"
  | "AMMO_PISTOL_TRACER"
  | "AMMO_MG_ARMORPIERCING"
  | "AMMO_MG_FMJ"
  | "AMMO_MG_INCENDIARY"
  | "AMMO_MG_TRACER"
  | "AMMO_SNIPER_EXPLOSIVE"
  | "AMMO_SMG_FMJ"
  | "AMMO_SMG_HOLLOWPOINT"
  | "AMMO_SMG_INCENDIARY"
  | "AMMO_SMG_TRACER"
  | "AMMO_FLAREGUN"
  | "AMMO_FIREWORK"
  | "AMMO_RAILGUN";
```
### IInventoryItemWeapon
```ts
export type IInventoryItemWeapon = {
  uuid: string;
  name: string;
  stability: number;
  type: "weapon";
  ammo: number;
  component: IItemComponent;
  amount: 1;
};
```

### IInventoryItemStackable
```ts
export type IInventoryItemStackable = {
  name: string;
  amount: number;
  type: "standard" | "extend" | "weapon-ammo";
};
```

### IInventoryItemUnStackable
```ts
export type IInventoryItemUnStackable = {
  uuid: string;
  name: string;
  amount: 1;
  type: Exclude<TUnStackableItem, "weapon">;
  expiration: number;
  stability: number;
};
```

### IInventoryItem
```ts
export type IInventoryItem = IInventoryItemWeapon | IInventoryItemStackable | IInventoryItemUnStackable;
```


### TNormalSlot
```ts
export const NormalSlot = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
] as const;

export type TNormalSlot = (typeof NormalSlot)[number];
```

### TClotherSlot
```ts
export const ClotherSlot = ["HAT", "GLASS", "EAR", "WATCH", "BRACELET", "MASK", "TORSOR", "LEG", "BAG", "SHOES", "ACCESSORY", "UNDERSHIRT", "KEVLAR", "DECAL", "TOP"] as const;
export type TClotherSlot = (typeof ClotherSlot)[number];
```

### TInventorySlot
```ts
export type TInventorySlot = TNormalSlot | TClotherSlot;
```
