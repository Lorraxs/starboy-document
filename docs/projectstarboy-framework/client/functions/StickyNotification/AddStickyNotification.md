# AddStickyNotification

### Fields
| field         | type                                             | Description |
| ------------- |:-------------                                   | -------------:   |
| title         | string                                           | Title  |
| message       | string                                           | Message |
| type          | progress-circular , progress-bar , count , timer | Type |
| value         | number                                           | Current value |
| max           | number                                           | Max value |

### Types
| type         | Demo                                             |
| ------------- |:-------------:| 
| progress-circular      | ![circular](https://cdn.lorraxs.dev/doc-assets/stickynotification-circular.png "Circular Notification") | 
| progress-bar      | ![bar](https://cdn.lorraxs.dev/doc-assets/stickynotification-bar.png "Bar Notification")  | 
| count | ![count](https://cdn.lorraxs.dev/doc-assets/stickynotification-count.png "count Notification") | 
| timer | ![timer](https://cdn.lorraxs.dev/doc-assets/stickynotification-timer.png "timer Notification") | 

### Return
#### Notification instance
##### Methods

- updateValue(number)
- remove()

### Example
```lua
local notification = CORE.AddStickyNotification({
  title = "Thuê phương tiện",
  message = "Bạn đã thuê thành công phương tiện " .. v.label .. " với giá " .. v.price,
  type = "progress-circular",
  value = 0,
  max = 30
})
notification.updateValue(2) --Update current value
notification.remove() -- Remove notification
```

