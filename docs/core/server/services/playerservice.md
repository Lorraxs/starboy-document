# PlayersService

### addPlayer

- called when player login to server

```ts
  PlayersService.addPlayer(player: cPlayer) : void
```

### getPlayer

- Get player instance by source

```ts
PlayersService.getPlayer(source: string) : cPlayer
```

### getPlayerById

- Get player instance by player id (ID in database)

```ts
PlayersService.getPlayerById(playerId: number) : cPlayer
```

### removePlayer

- Called when event `onPlayerDropped` trigger

```ts
PlayersService.removePlayer(playerSrc: string) : void
```

### savePlayerAppearance

- Save player appearance

```ts
PlayersService.savePlayerAppearance(source: number, data: IPedAppearance) : void
```

### register

- Register player

```ts
PlayersService.register(source: number, data: IPedAppearance) : Promise<IResponse>
```

### onPlayerInventoryDragEnd

- This method use in Inventory

```ts
PlayersService.onPlayerInventoryDragEnd(src: string, data: IDropResult) : Promise<IResponse>
```
