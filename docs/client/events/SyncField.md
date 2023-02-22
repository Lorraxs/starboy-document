# PlayerService:SyncField

## Client side

This event is triggered when the player make change into database

### Arguments

| Arguments | Type          |
| --------- | ------------- |
| field     | keyof IPlayer |
| data      | any           |

## Example useage

- Use DI

```bash
  @NetEvent("PlayerService:SyncField")
  onSyncField(field: keyof IPlayer, data: any){
    console.log('Field: ', field)
    console.log('Data', data)
  }
```

- Default

```bash
  onNet("PlayerService:SyncField", (field: keyof IPlayer, data: any)=>{
    console.log('Field: ', field)
    console.log('Data', data)
  })
```
