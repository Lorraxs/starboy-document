# socketEmit
## Emit client socket io instance insteal of use TriggerClientEvent to prevent network hitch
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| eventName | string |
| ...args  | any[]  |

### Example
```lua
Player.socketEmit(eventName, 1, "bread", {foo: "bar"})
```