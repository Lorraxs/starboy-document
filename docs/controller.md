---
sidebar_position: 3
---

# How to write controller

- Write controller class with decorator @Controller
- Import into client.ts or server.ts

### Example

```ts
/// register.controller.ts
import { inject } from "inversify";
import { Controller, NuiHandler, Inject } from "starboy-framework";
import { NuiService } from "../services/nui.service";
import { ICreatePlayer, eStatus } from "../../shared/interfaces";
import { emitCallback } from "../utils/callback";
import { ILoginResponse } from "../../shared/interfaces/login.interface";

@Controller("RegisterController")
class RegisterController {
  /* @Inject is constructor decorator. It inject class NuiService 
  into class RegisterController as this.nuiService 
  after that, you can call any public method from NuiService
  */
  constructor(@Inject(NuiService) private readonly nuiService: NuiService) {}
  @NuiHandler("Register")
  async onRegister(data: ICreatePlayer, cb: any) {
    cb();
    const response = await emitCallback<ILoginResponse>(
      "players:register",
      data
    );
    console.log(response);
    if (response.status === eStatus.SUCCESS) {
      this.nuiService.notification({
        message: response.message,
        type: "success",
      });
      this.nuiService.hidePage("Register");
      this.nuiService.showPage("Login");
    } else {
      this.nuiService.notification({
        message: response.message,
        type: "error",
      });
    }
  }
}
export default RegisterController;
```

```ts
/// client.ts
import { App } from "starboy-framework";
import RegisterController from "./controllers/register.controller";

const client = App.create({
  controllers: [RegisterController], //RegisterController was imported
});

client.start();
```

## Available decorators in controller

- All decorators only use in Controller not Service

### @ChatCommand

This decorator will trigger RegisterCommand native

```ts
  @ChatCommand(
    command: string,
    description?: string,
    params?: { name: string; help: string }[]
  )
```

```ts
  //Example
  @ChatCommand("SetNuiFocus", "SetNuiFocus", [
    { name: "hasFocus", help: "boolean" },
    { name: "hasCursor", help: "boolean" },
  ])
  cSetNuiFocus(source: string, args: any[], rawCommand: string) {
    const hasFocus = args[0] === "true" ? true : false;
    const hasCursor = args[1] === "true" ? true : false;
    this.nuiService.SetNuiFocus(hasFocus, hasCursor);
  }
```

### @Event

- This decorator will register an event (AddEventHandler)
- Trigger by using `emit(eventName: string, args)`

```ts
  @Event(name: string)
```

```ts
  //Example
  @Event("exampleEvent")
  exampleEvent(args) {
    console.log(args) // print: testData
  }

  emit("exampleEvent", 'testData')
```

### @NetCallback

- This decorator will register a callback event
- Trigger by using `emitCallback(eventName: string, args)`

```ts
  @NetCallback(name: string)
```

```ts
  //Example
  //Server side
  @NetCallback("exampleCallbackEvent")
  exampleEvent(value:number) {
    const newValue = value + 1
    return newValue // this line will return value to client where was call this event
  }
  @NetCallback("exampleCallbackEvent2")
  exampleEvent(value:number, value2: number) {
    const newValue = value + value2
    return newValue // this line will return value to client where was call this event
  }
  //Client side
  const response = await emitCallback("exampleCallbackEvent", 1)
  console.log(response) // print: 2

  const response = await emitCallback("exampleCallbackEvent2", 5, 6)
  console.log(response) // print: 11
```

### @NetEvent

- This decorator will register a nui handler (RegisterNetEvent)
- Trigger by using `emitNet(eventName: string, args)`

```ts
  @NetEvent(name: string)
```

```ts
  //Example
  //Server side
  @NetEvent("exampleNetEvent")
  exampleEvent(...args:any[]) {
    console.log(...args) //print: 1 2 {foo: 'bar'}
  }

  //Client side
  emitNet("exampleNetEvent", 1, 2, {foo: 'bar'})

```

### @NuiHandler

- This decorator will register a nui callback (RegisterNUICallback)
- Only on client side

```ts
  @NuiHandler(name: string)
```

```ts
  //Example
  @NuiHandler("exampleNuiHandler")
  exampleNuiHandler(data: any, cb: any) {
    console.log(...args) //print: 1 2 {foo: 'bar'}
  }

```

### @Tick

- This decorator will create a loop thread

```ts
  @Tick(interval: number //in milisecond)
```

```ts
  //Example
  @Tick(1000)
  tick1() {
    console.log('tick was called') //print: 'tick was called' every 1 second
  }

```

```lua
  -- alias
  Citizen.CreateThread(function()
    while true do
      Citizen.Wait(1000)
      print('tick was called') --print: 'tick was called' every 1 second
    end
  end)
```
