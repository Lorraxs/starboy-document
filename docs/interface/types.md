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
  | "PlayerInventory";
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
  | "setPlayerMaxInventoryWeight";
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
