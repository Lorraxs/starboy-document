# CORE.PlayerData.previewAppearance
#### Set player naked for try on clothes
### Arguments

| Arguments | Type   |
| --------- | ------ |
| data  | [IPreviewAppearance](../../../../core/interface/interfaces.md#ipreviewappearance) |
| options  | [IPreviewOptions](../../../../core/interface/interfaces.md#ipreviewoptions) or undefined |

### Return

void

## Example

```lua
CORE.PlayerData.previewAppearance({
  components = {
    {
      componentId = 11,
      drawable = 16,
      texture = 0
    }
  }
}, {components = true}) 
```