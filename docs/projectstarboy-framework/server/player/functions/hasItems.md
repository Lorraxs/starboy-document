# hasItems
## Show player notification 
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [IAddPlayerInventoryItemProps](../../../../core/interface/interfaces.md#iaddplayerinventoryitemprops)[] |

### Return 
boolean

### Example
```lua
Player.hasItems({
  {
    itemName = "bread",
    amount = 2
  }
})

```