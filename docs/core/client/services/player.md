# PlayerService

### initData

Triggered when player logged in
This function parse data recived from server to service as field 'data'

```ts
PlayerService.initData(data: IPlayer);
```

### syncField

This function parse field and data from server to instance and post it to NUI redux store

```ts
PlayerService.syncField<T extends IPlayer, U extends keyof IPlayer>(
  field: U,
  data: T[U]
);
```

### setCoords

Set player position

```ts
PlayerService.setCoords(coords: ICoords) ;
```

### loadPlayerModel

This function call when initData executed;
It starting create player model

```ts
PlayerService.loadPlayerModel();
```

### updateAppearance

This function will update player appearance when call

```ts
PlayerService.updateAppearance(data: IPedAppearance);
```

### saveAppearance

This function will save player appearance to database

```ts
PlayerService.saveAppearance(data: IPedAppearance);
```

### useItem

Call for use an item

```ts
PlayerService.useItem(slot: EPlayerInventorySlot);
```

### removeHealth

```ts
PlayerService.removeHealth(value: number);
```

### addHealth

```ts
PlayerService.addHealth(value: number);
```

### registerRaycastEntity

```ts
PlayerService.registerRaycastEntity(ref: IRaycastEntity);
```

### removeRaycastEntity

```ts
PlayerService.removeRaycastEntity(ref: IRaycastEntity);
```
