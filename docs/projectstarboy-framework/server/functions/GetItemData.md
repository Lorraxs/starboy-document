# CORE.GetItemData

### Arguments

| Arguments | Type   | Description   |
| --------- | ------ | ------ |
| itemName  | string | Name of item |  


### Return

*ItemData*

## Example

```lua
local itemData = CORE.GetItemData('bread')
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