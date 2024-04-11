# CreateRentVehicle 
Use to rent vehicle
---

## Arguments
- source
  - Player source
- model
  - Vehicle model string or hash
- coords
  - [number, number, number]
- heading
  - number

## Return
```lua
{
  status --[[ number ]], -- 0 = failed, 1 = success
  data --[[ number ]] -- vehicle net ID
}
```

## Example
```lua
local response = exports.ProjectStarboy:CreateRentVehicle(source, model, coords, heading)
```