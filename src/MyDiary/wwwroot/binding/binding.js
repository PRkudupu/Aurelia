export class binding{
    constructor() {
        this.firstName = "Prathap";
        this.lastName = "Kudupu";
        this.firstNameOneWay = "Prathap";
        this.lastNameTOneWay = "Kudupu";
        this.people = [];
    }
    get fullNameTwoWay() {
        return `${this.firstName} ${this.lastName}`;
        //return this.firstName + ""+  this.lastName;
       
    }
    get fullNameOneWay() {
        return `${this.firstNameOneWay} ${this.lastNameTOneWay}`;
        //return this.firstName + ""+  this.lastName;
       
    }

   
}