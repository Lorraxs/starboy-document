# BlipService

### createBlip()

```ts
BlipService.createBlip(data: IBlip):number
///example
const blip = await this.blipService.createBlip({
  title: 'BLIP_TITLE,
  coords: [0.0,1.0,2.0],
  color: eBlipColor.DarkGray,
  sprite: 150,
});
```

### removeBlip()

```ts
BlipService.removeBlip(blipId: number):void
```
