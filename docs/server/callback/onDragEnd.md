# PlayerInventory:OnDragEnd

## Server side callback

This callback triggered when player move item in inventory UI. Return IResponse

### Arguments

| Arguments | Type        | Return    |
| --------- | ----------- | --------- |
| data      | IDropResult | IResponse |

## Example Useage

- Client

```ts
const response = await emitCallback("PlayerInventory:OnDragEnd", data);
/*{
  status: eStatus.FAILED,
  message: "Vật phẩm này không thể đặt ở đây",
}
{
  status: eStatus.FAILED,
  message:
    "Bạn không có ba lô. Bạn có thể đến cửa hàng 24/7 để mua ba lô",
}
{
  status: eStatus.SUCCESS,
}
*/
```
