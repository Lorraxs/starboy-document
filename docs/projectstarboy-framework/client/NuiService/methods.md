# Methods
---
## How to use
```lua
CORE.NUI['methodName'](...args)
```
---
### isPageShow 
Check is page showing
- args
  - none
```lua
CORE.NUI['isPageShow']() --return boolean
```
---
### showPage
Show UI page
- args
  - component `INUIPage`
```lua
CORE.NUI['showPage']('HudV2') 
```
---
### hidePage
Hide UI page
- args
  - component `INUIPage`
```lua
CORE.NUI['hidePage']('HudV2') 
```
---
### notification
Show notification
- args
  - data `INotification`
```lua
CORE.NUI['notification']({
  message = "Hello world",
  type = "info", -- info | error | warning | success
  duration = 3000 -- default 5000
}) 
```
---
### nuiDispatch
Dispatch to NUI redux store
- args
  - data `INuiDispatch`
```lua
CORE.NUI['notification']({
  event = "setPlayerCoin",
  data = 100
}) 
```
---
### showHUD
Show HUD
- args
  - none
```lua
CORE.NUI['showHUD']() 
```
---
### hideHUD
Hide HUD page
- args
  - none
```lua
CORE.NUI['hideHUD']() 
```