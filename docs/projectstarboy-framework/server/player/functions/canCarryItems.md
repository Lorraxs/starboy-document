# canCarryItems
## Check player can carry array of items
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IPlayerCanCarryItem](../../../../core/interface/interfaces.md#iplayercancarryitem)[ ] |

### Return 
boolean

### Example
```lua
Player.canCarryItems({
  {
    itemName = "bread",
    amount = 2
  }
})

```