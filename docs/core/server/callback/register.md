# players:register

## Server side callback

Use for register a player. Return IResponse

### Arguments

| Arguments | Type          | Return    |
| --------- | ------------- | --------- |
| data      | ICreatePlayer | IResponse |

## Example Useage

- Client

```ts
data = {
  email: 'string';
  password: 'string';
  name: 'string';
  gender: 'male';
}
const response = await emitCallback("players:register", data);
/*
{
  status: eStatus.FAILED,
  message: "Vui lòng nhập Email",
}
{
  status: eStatus.FAILED,
  message: "Email hoặc tên đã tồn tại",
}
{
  status: eStatus.SUCCESS,
  message: `Tài khoản ${data.email} đã được tạo thành công`,
  data: player,
}
*/
```
