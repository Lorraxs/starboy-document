# CORE.PlayerData.setPlayerUniform
#### Set player uniform for job
### Arguments

| Arguments | Type   |
| --------- | ------ |
| data  | \{ components: [IPedComponent](../../../../core/interface/interfaces.md#ipedcomponent)[]; props: [IPedProp](../../../../core/interface/interfaces.md#ipedprop)[] \} |

### Return

void

## Example

```lua
CORE.PlayerData.setPlayerUniform({
   {
    {
      componentId = 11,
      drawable = 16,
      texture = 0
    }
  }
}, {}) 
```