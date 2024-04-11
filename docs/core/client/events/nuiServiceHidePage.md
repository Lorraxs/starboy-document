# nuiService:hidePage

## Client side

This event show notification when triggered

### Arguments

| Arguments | Type     |
| --------- | -------- |
| page      | INUIPage |

## Example Useage

- Client side

```js
on("nuiService:hidePage", (page) => {
  console.log(page);
  /* | "Login"
  | "Register"
  | "CharacterCreator"
  | "PlayerInventory"
  | "GroceryStore"
  | "WeaponShop"
  | "Menu" */
});
```
