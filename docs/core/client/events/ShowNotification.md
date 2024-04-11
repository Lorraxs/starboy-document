# Player:ShowNotification

## Client side

This event show notification when triggered

### Arguments

| Arguments | Type          |
| --------- | ------------- |
| data      | INotification |

## Example useage

- Client side

```js
const notification: INotification = {
  message: "test message",
  type: "success", //  "success" | "error" | "warning" | "info"
  duration: 5000,
};
emit("Player:ShowNotification", notification);
```

- Server side

```js
const notification: INotification = {
  message: "test message",
  type: "success", //  "success" | "error" | "warning" | "info"
  duration: 5000,
};
emitNet("Player:ShowNotification", playerSource, notification);
//playerSource is source of player you want to trigger from server side
```
