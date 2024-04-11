# addInventoryItem
## Add item to player inventory
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IAddInventoryItem](../../../../core/interface/interfaces.md#iaddinventoryitem) |

### Return 
number

### Example
```lua
Player.addInventoryItem({
  itemName = "bread",
  amount = 2
})

```