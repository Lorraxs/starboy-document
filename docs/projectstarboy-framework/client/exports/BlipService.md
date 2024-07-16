# BlipService

## BlipService_createBlip

### Arguments

```ts
interface IBlip {
  sprite: number;
  coords: number[];
  color?: eBlipColor | number;
  scale?: number;
  title: string;
  display?: number;
}
```

### Return

`BLIP ID`

## Example

```lua
local blipId = exports['ProjectStarboy']:BlipService_createBlip({
  sprite = 1,
  coords = [123,456,789],
  color = 2,
  scale = 1.0,
  title = 'blip',
})
```

## BlipService_removeBlip

### Arguments

```ts
blipId: number;
```

### Return

```ts
void
```

## Example

```lua
exports['ProjectStarboy']:BlipService_removeBlip(blipId)
```
