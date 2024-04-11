# canCarryItem
## Check player can carry an item
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IPlayerCanCarryItem](../../../../core/interface/interfaces.md#iplayercancarryitem) |

### Return 
boolean

### Example
```lua
Player.canCarryItem({
  itemName = "bread",
  amount = 2
})

```