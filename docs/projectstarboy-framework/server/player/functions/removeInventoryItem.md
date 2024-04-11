# removeInventoryItem
## Add item to player inventory
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IRemovePlayerInventoryItemProps](../../../../core/interface/interfaces.md#iremoveplayerinventoryitemprops) |

### Return 
number

### Example
```lua
Player.removeInventoryItem({
  itemName = "bread",
  amount = 2
})

```