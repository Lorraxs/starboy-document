# LR Team
---
### Client Exports
*Create team*
```lua
exports.lr_team:CreateSquad({
  maxPlayer = 6,
  privated = false
})
```
*Leave current team*
```lua
exports.lr_team:LeaveSquad()
```
*Invite player to team*
```lua
exports.lr_team:InvitePlayer(6 --[[ playerId ]])

```
---
### Server Exports
*Trigger to team members client*
```lua
exports.lr_team:TriggerClientEvent(eventName: string, target: number, ...args)
-- If target in a team then TriggerClientEvent to all player in target team else TriggerClientEvent to target
--ex:
exports.lr_team:TriggerClientEvent("exampleEvent", 2, "Hello from server")
```
*Get all created teams*
```lua
exports.lr_team:GetTeams()
-- return array of all teams
--[[ 
  {
    uuid: string, -- 15cg-sad1-cedd
    ownerName: string, --example name
    ownerId: number, --2
    maxPlayer: number, --4
    players: number[] --[1,2,15,18]
    privated: boolean 
  }[]
 ]]
```
*Get player team*
```lua
export.lr_team:GetTeam(playerId: number)
-- return Team | nill
-- ex:
--[[ 
  {
    uuid: string, -- 15cg-sad1-cedd
    ownerName: string, --example name
    ownerId: number, --2
    maxPlayer: number, --4
    players: number[] --[1,2,15,18]
    privated: boolean 
  }
 ]]
```