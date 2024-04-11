# Player:ShowNotification

## Triggered when player inventory change

### Arguments
| Arguments | Type   |
| --------- | ------ |
| data  | [INotification](../../../core/interface/interfaces.md#inotification) |

## Example

```lua
TriggerClientEvent("Player:ShowNotification", 2, {
  message = "Hello world",
  type = "success",
  duration = 3000
})
```