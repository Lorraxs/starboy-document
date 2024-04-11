# CORE.GetRandomItem

### Arguments

| Arguments | Type   | Description   |
| --------- | ------ | ------ |
| options ?  | `{rarity?:number; type?:string; category?:string}` | 0 - 4 |  


### Return

*ItemData*

## Example

```lua
local itemData = CORE.GetRandomItem({
      rarity = 1,
      type = "standard"
    })
--[[ 
  return {
    "name": "bread",
    "label": "Bánh mì",
    "weight": 100,
    "limit": 10000,
    "description": "Dùng để ăn khi đói",
    "canUse": true,
    "canTransfer": true,
    "canDrop": true,
    "type": "standard",
    "rarity": 0,
    "categories": ["food"]
  }
 ]]
```