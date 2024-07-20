# LR NPC

![npc](https://cdn.lorraxs.dev/doc-assets/lr_npc.png "lr_npc")

## Create NPC

---

### Option

Use for create NPC

### Option parameters

- name: `string`
  - Use for delete npc
- coords: `vector3`
  - Ped position
- heading: `number`
  - Ped heading
- options: `ox_target options`
  - use [ox_target option](https://overextended.dev/ox_target/Options)
- blip?: `{sprite: number; color: number; name: string; scale: number; shortRange: boolean}`
- navigation?: `{color?: {r,g,b}, icon?: string}`

### Example

```lua
exports.lr_npc:CreatePed({
      name = "lr_rentvehicle",
      coords = vector3(1.1, 2.2, 3.3),
      heading = 4.4,
      options = {
        {
          icon = "fa-solid fa-car",
          label = "Test label",
          canInteract = funcion()
            return not IsPedInAnyVehicle(PlayerPedId(), false)
          end,
          onSelect = function(data)
            print(json.encode(data))
          end
        }
      },
      blip = {
        sprite = 480,
        color = 11,
        name = "Thuê phương tiện",
        scale = 0.7,
        shortRange = true
      },
      navigation = {
        color = {255,255,255},
        icon = "clothes"
      }
    })
```

## Delete NPC

---

### Example

```lua
exports.lr_npc:DestroyPed(npcName)
```
