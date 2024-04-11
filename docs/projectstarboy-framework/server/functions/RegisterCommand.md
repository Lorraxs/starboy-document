# CORE.RegisterCommand

### Arguments

| Arguments | Type   | Description   |
| --------- | ------ | ------ |
| command  | `string`, `string[]`  | command name |  
| group  | `string`, `string[]`  | user group |  
| help  | `string`  | command help |  
| params  | `param[]`  | command param |  
| cb  | `callback(callerPlayer, params, rawCommand)`  | command param |  


### Command param
```ts
interface IParam {
  name: string;
  help: string;
  type?: "number" | "string" | "boolean" | "table" | "player" | "playerSrc"
}
```

### Command callback
```ts
function callback(excuter:IPlayer, formatedParams: {[key: string]: number | boolean | table | IPlayer}, rawCommand: string){
  //excuter is player instance of command excuter
  /* 
  formatedParams is args was formated by param type
  */
}
```

### Return

*Player class*

## Example

```lua
CORE.RegisterCommand("test_command", {"admin"}, "This is test command", {
  {
    name = "arg_1",
    help = "this is argument 1",
    type = "number",
  },
  {
    name = "arg_2",
    help = "this is argument 2",
    type = "boolean",
  },
  {
    name = "arg_3",
    help = "this is argument 3",
    type = "player",
  },
}, function(executer, params, rawCommand)
  print(excuter.name) -- player instance return player name
  print(params.arg_1)
  print(params.arg_2)
  print(params.arg_3.name)
end)
ExecuteCommand("test_command 1 false 3")
--[[print out 
Lorraxs
1
false
Lorraxs3
 ]]
```