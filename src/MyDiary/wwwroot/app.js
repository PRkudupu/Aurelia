export class App{
    constructor() {
        this.firstName = "Rob";
        this.lastName = "Eisenberg";
        this.friends = [];
        this.potentialFriend = '';
    }
    get fullName() {
        return `${this.firstName}${this.lastName}`;
    }
    addfriend() {
         if (this.potentialFriend) {
            this.friends.push(this.potentialFriend);
        }
        this.potentialFriend = '';
    }
    
}