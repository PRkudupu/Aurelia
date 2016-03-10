export class App {
    constructor () {
        this.message = "";
    }
    activate() {
        this.message = "calling from activate.";
    }
    ChangeMessage() {
        this.message = " Button click change message.";
    }
}