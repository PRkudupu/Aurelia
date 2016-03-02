/*Simple example to export */
//import {sayHello} from 'greeter'
//sayHello();

/*Simple example for class*/
//import {sayHello} from 'greeter'
export class App {

    constructor () {
        this.message = "";
    }
    activate () {
        this.message = "Hello from Prathap Kudupu";
    }
    ChangeMessage() {
        this.message ="Calling button trigger"
    }
}
