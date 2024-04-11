# core:onInventoryChange

## Triggered when player inventory change

### Arguments
| Arguments | Type   |
| --------- | ------ |
| data  | [IInventory](../../../core/interface/interfaces.md#iinventory) |

## Example

```lua
AddEventHandler("core:onInventoryChange", function(data)
  data --IInventory
end)
```