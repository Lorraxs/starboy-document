# showNotification
## Show player notification 
### Arguments
| Arguments    | type |
| ---------- | :--------- |
| data | [INotification](../../../../core/interface/interfaces.md#inotification) |

### Example
```lua
Player.showNotification({
  message = "Hello world",
  type = "success",
  duration = 5000
})
--or
Player.showNotification({
  message = "Hello world",
})
```