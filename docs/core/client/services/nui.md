# NuiService

### setNuiReady

Triggered from NUI when nui ready

```ts
NuiService.setNuiReady();
```

### showPage

Show NUI page

```ts
NuiService.showPage(component: INUIPage);
```

### hidePage

Hide NUI page

```ts
NuiService.hidePage(component: INUIPage);
```

### notification

Show notification

```ts
NuiService.notification(data: INotification);
```

### nuiDispatch

Dispatch to redux store

```ts
NuiService.nuiDispatch(data: INuiDispatch);
//example
this.nuiService.nuiDispatch({
  event: "setWeaponShopItems",
  data: data.items,
});
```
