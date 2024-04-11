# CORE.PlayerData.setPlayerClothe
#### Set player clothes 
### Arguments

| Arguments | Type   |
| --------- | ------ |
| data  | \{ components: [IPedComponent](../../../../core/interface/interfaces.md#ipedcomponent)[]; props: [IPedProp](../../../../core/interface/interfaces.md#ipedprop)[] \} |

### Return

void

## Example

```lua
CORE.PlayerData.setPlayerClothe({
   {
    {
      componentId = 11,
      drawable = 16,
      texture = 0
    }
  }
}, {}) 
```