# cPlayer

## This is player class ( similar xPlayer in ESX )

### save()

- Save player

```ts
cPlayer.save() : void
```

### saveField()

- Save a field of cPlayer

```ts
cPlayer.saveField(field: keyof cPlayer) : void
```

### saveAppearance()

- Save cPlayer appearance

```ts
cPlayer.saveAppearance(data: IPedAppearance) : void
```

### saveCoords()

- Save cPlayer coords

```ts
cPlayer.saveCoords() : void
```

### showNotification()

- Show notification on player

```ts
cPlayer.showNotification(data: INotification) : void
```

### hasItem()

- Check is player has an item

```ts
cPlayer.hasItem(data: IAddPlayerInventoryItemProps) : IHasItem
```

```ts
//example
const hasBread = cPlayer.hasItem({
  itemName: "bread",
  amount: 1,
});
console.log(hasBread);
/* 
{
  status: eStatus.SUCCESS
}
{
  status: eStatus.FAILED
}
*/
```

### hasItems()

- Check is player have a list of item

```ts
cPlayer.hasItems(data: IAddPlayerInventoryItemProps[]) : IHasItem
```

### getFreeSlot()

- Get free slot in player inventory

```ts
cPlayer.getFreeSlot(): EPlayerInventorySlot[]

```

### addIventoryItem()

- Add item to player

```ts
cPlayer.addIventoryItem(data: IAddInventoryItem): IInventoryResponse
```

### hasBackpack()

- Check player wearing backpack

```ts
cPlayer.hasBackpack() : boolean
```
