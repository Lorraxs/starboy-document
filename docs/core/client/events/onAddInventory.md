# player:client:onAddInventory

### Arguments

| Arguments | Type   |
| --------- | ------ |
| itemName  | string |
| amount    | number |

## Example usage

- Use DI

```ts
  @NetEvent("player:client:onAddInventory")
  private onAddInventory(itemName: string, amount: number){
    console.log(itemName, amount) //itemName number
  }
```

- Default

```ts
onNet("player:client:onAddInventory", (itemName: string, amount: number) => {
  console.log(itemName, amount); //itemName number
});
```
