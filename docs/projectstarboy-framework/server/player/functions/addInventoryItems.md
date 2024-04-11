# addInventoryItems
## Add item array to player inventory
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IAddInventoryItem](../../../../core/interface/interfaces.md#iaddinventoryitem) |

### Return 
number

### Example
```lua
Player.addInventoryItems({
  {
    itemName = "bread",
    amount = 2
  }
})

```