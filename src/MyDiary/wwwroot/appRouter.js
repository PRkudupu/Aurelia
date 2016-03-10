/*Simple example to export */
//import {sayHello} from 'greeter'
//sayHello();

/*Simple example for class*/
//import {sayHello} from 'greeter'
//export class App {

//    constructor () {
//        this.message = "";
//    }
//    activate () {
//        this.message = "Hello from Prathap Kudupu";
//    }
//    ChangeMessage() {
//        this.message ="Calling button trigger"
//    }
//}
import {Router} from 'aurelia-router'
export class App{
    static inject =[Router ];
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Contacts';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select' },
                { route: 'contacts/:id', moduleId: 'contact-detail' }
            ]);
        });
    }
}