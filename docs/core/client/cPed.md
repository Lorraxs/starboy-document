# cPed

## This is a NPC class. Use this class to create NPC and interaction with it

### How to use

- This class need 2 service

* PlayerService
* MenuService

```ts
const ped = new Ped(data: IPed, playerService:PlayerService, menuService: MenuService)
```

```ts
//example data:IPed
const data: IPed = {
  pedModel: data.pedModel,
  coords: data.coords,
  pedRelationShip: data.pedRelationShip,
  interaction: {
    helloMessage: <string>this.i18n.t("HELLO_HOW_CAN_I_HELP_YOU"),
    title: <string>this.i18n.t("WEAPON_STORE"),
    elements: [
      {
        label: this.i18n.t("I_WANT_TO_VIEW_STORE"),
        callback: () => {
          this.nuiService.nuiDispatch({
            event: "setWeaponShopItems",
            data: data.items,
          });
          this.nuiService.nuiDispatch({
            event: "setWeaponShopIndex",
            data: this.index,
          });
          this.nuiService.showPage("WeaponShop");
        },
      },
      {
        label: this.i18n.t("LEAVE"),
        callback: () => {
          console.log("Rời khỏi");
        },
      },
    ],
    onCancle() {
      console.log("onCancle");
    },
    onClose() {
      console.log("onClose");
    },
    onOpen() {
      console.log("onOpen");
    },
  },
};
```

### ped

- cPed entity

```ts
cPed.ped;
```
