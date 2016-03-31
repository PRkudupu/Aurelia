export class App{
    constructor() {
        this.message = "Hello Boston Code Camp";
        this.firstName = "Rob";
        this.lastName = "Eisenberg";
        this.friends = [];
        this.potentialFriend = '';
    }
    get fullName() {
        return `${this.firstName}${this.lastName}`;
    }
    addFriend() {
        if (this.potentialFriend) {
            this.friends.push(this.potentialFriend);
        }
    }
    delete(index) {
         this.friends.splice(index, 1);
    }
    
}