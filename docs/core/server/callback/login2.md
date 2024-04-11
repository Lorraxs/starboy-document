# players:login

## Server side callback

Use for login action. Client trigger callback with login data and server return IResponse

### Arguments

| Arguments | Type         | Return    |
| --------- | ------------ | --------- |
| data      | ILoginPlayer | IResponse |

## Example Useage

- Client

```ts
const response = await emitCallback("players:login", data);
/* response = {
  status: eStatus.SUCCESS,
  message: "Đăng nhập thành công",
  data: player,
}; */
```
