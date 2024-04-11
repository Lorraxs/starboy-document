# MenuService

### menu

```ts
menu: ICreateMenu;
```

### createMenu()

```ts
MenuService.createMenu(data: ICreateMenu, onClose?: () => void)
//EXAMPLE
this.menuService.createMenu({
  helloMessage: <string>this.i18n.t("HELLO_HOW_CAN_I_HELP_YOU"),
  title: <string>this.i18n.t("WEAPON_STORE"),
  elements: [
    {
      label: this.i18n.t("I_WANT_TO_VIEW_STORE"), //Label of option
      callback: () => { //trigger when option was clicked
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
      label: this.i18n.t("LEAVE"),  //Label of option
      callback: () => { //trigger when option was clicked
        console.log("LEAVE");
      },
    },
  ],
  onCancle() {
    console.log("onCancle"); //trigger when user press ESC
  },
  onClose() {
    console.log("onClose"); //trigger when close
  },
  onOpen() {
    console.log("onOpen"); //trigger when close
  },
}, () => {
  console.log('closed') //print when menu close
});
```

### destroyMenu()

- Destroy all menu

```ts
MenuService.destroyMenu();
```
