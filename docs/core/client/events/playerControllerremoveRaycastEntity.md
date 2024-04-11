# playerController:registerRaycastEntity

## Client side

- This event register entity to raycast system
- When player aiming at entity. it will call callbacks function

### Arguments

| Arguments | Type     |
| --------- | -------- |
| page      | INUIPage |

## Example Useage

- Client side

```js
const ped = CreatePed(...);
const data: IRaycastEntity = {
  entity: ped,
  onTarget: ()=>{
    console.log('this will execute when player target on entity (1 time)')
  },
  outTarget: ()=>{
    console.log('this will execute when player not target on entity (1 time)')
  }
}
emit("playerController:registerRaycastEntity", data);
emit("playerController:removeRaycastEntity", data); //this will remove ped form raycast system

//NOTE
emit("playerController:removeRaycastEntity", {
  entity: ped,
  onTarget: ()=>{
    console.log('this will execute when player target on entity (1 time)')
  },
  outTarget: ()=>{
    console.log('this will execute when player not target on entity (1 time)')
  }
})
//this will not work. You must send a refrence
```
