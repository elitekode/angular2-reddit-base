// your code goes here
import { bootstrap } from "@angular/platform-browser-dynamic"; import { Component } from "@angular/core";
@Component({
  selector: 'hello-world',
  template: `
  <div>
    Hello world
  </div>
`
})
class HelloWorld { }
bootstrap(HelloWorld);
//boots the application 
