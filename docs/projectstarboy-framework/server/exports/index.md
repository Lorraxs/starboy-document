# Exports

## GetPlayerFactionData

```lua
local player = exports.ProjectStarboy:GetPlayerFactionData(playerSrc)
--[[
{
  name= faction.name,
  label= faction.label,
  type= faction.type,
  rank= member.rank,
  privileges= member.privileges,
}
]]
```

## HasFactionPrivilege

```lua
local canInvite = exports.ProjectStarboy:HasFactionPrivilege(playerSrc, "INVITE")
-- boolean
```

## getCash

```lua
local money = exports.ProjectStarboy:getCash(playerSrc)
-- number
```

## getBank

```lua
local bank = exports.ProjectStarboy:getBank(playerSrc)
-- number
```

## addCash

```lua
local money = exports.ProjectStarboy:addCash(playerSrc, amount--[[ number ]])
-- void
```

## removeCash

```lua
local money = exports.ProjectStarboy:removeCash(playerSrc, amount--[[ number ]])
-- void
```

## SettingVariable_GetVar

```lua
local timeInterval = exports.ProjectStarboy:SettingVariable_GetVar('time_interval', 100)
--[[
  return 100 if not have time_interval variable

]]
```

## Players

### getSkillExp

```lua
local exp = exports.ProjectStarboy:getSkillExp(playerSrc, "fisherman")
-- number
```

### setSkillExp

```lua
exports.ProjectStarboy:setSkillExp(playerSrc, "fisherman", 1)
-- void
```

### addSkillExp

```lua
local exp = exports.ProjectStarboy:addSkillExp(playerSrc, "fisherman", 1)
```

### removeSkillExp

```lua
local exp = exports.ProjectStarboy:removeSkillExp(playerSrc, "fisherman", 1)
```

### setName

```lua
exports.ProjectStarboy:setName(playerSrc, "newName")
```

### setEmail

```lua
exports.ProjectStarboy:setEmail(playerSrc, "newEmail@gmail.com")
```

### setHealth

```lua
exports.ProjectStarboy:setHealth(playerSrc, 100)
```

### setArmour

```lua
exports.ProjectStarboy:setArmour(playerSrc, 100)
```

### setMoney

```lua
exports.ProjectStarboy:setMoney(playerSrc, 100)
```

### setBank

```lua
exports.ProjectStarboy:setBank(playerSrc, 100)
```

### setCoin

```lua
exports.ProjectStarboy:setCoin(playerSrc, 100)
```

### setBlackMoney

```lua
exports.ProjectStarboy:setBlackMoney(playerSrc, 100)
```

### setCuffing

```lua
exports.ProjectStarboy:setCuffing(playerSrc, true)
```

### setDead

```lua
exports.ProjectStarboy:setDead(playerSrc, false)
```

### setAvatar

```lua
exports.ProjectStarboy:setAvatar(playerSrc, string)
```

### setExp

```lua
exports.ProjectStarboy:setExp(playerSrc, 100)
```

### setWanted

```lua
exports.ProjectStarboy:setWanted(playerSrc, 5)
```
