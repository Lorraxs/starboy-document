---
sidebar_position: 3
---

# What is Injectable

- Injectable is Class decorator
- Injectable make class can inject on another class

### Example

```ts
//example.service.ts
@Injectable()
export default class ExampleService(){
  private name: string = 'ExampleService';

  public getName = ():string => {
    return this.name
  }
}
```

```ts
//example2.service.ts
@Injectable()
export default class ExampleService2(){
  private name: string = 'ExampleService2';

  public getName = ():string => {
    return this.name
  }
}
```

```ts
//example3.service.ts
@Injectable()
export default class ExampleService3(){
  private name: string = 'ExampleService3';

  constructor(
    //This line inject a class ExampleService to this class as this.exampleService
    @Inject(ExampleService) private readonly exampleService: ExampleService2
    //This line inject a class ExampleService2 to this class as this.exampleService
    @Inject(ExampleService2) private readonly exampleService2: ExampleService2
  ){
    console.log(this.getName1()) // print: ExampleService
    console.log(this.getName2()) // print: ExampleService2
  }

  public getName1 = ():string => {
    return this.exampleService.getName()
  }
  public getName2= ():string => {
    return this.exampleService2.getName()
  }
}
```
