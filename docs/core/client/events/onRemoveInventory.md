# player:client:onRemoveInventory

### Arguments

| Arguments | Type   |
| --------- | ------ |
| itemName  | string |
| amount    | number |

## Example useage

- Use DI

```ts
  @NetEvent("player:client:onRemoveInventory")
  private onRemoveInventory(itemName: string, amount: number){
    console.log(itemName, amount) //itemName number
  }
```

- Default

```ts
onNet("player:client:onRemoveInventory", (itemName: string, amount: number) => {
  console.log(itemName, amount); //itemName number
});
```
