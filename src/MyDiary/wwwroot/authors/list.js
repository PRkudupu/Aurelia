import {inject} from "aurelia-framework"
import {AuthorData} from "./authorData";

@inject(AuthorData)
export class List {
    constructor (AuthorData) {
        this.message = "";
        this.authorData = AuthorData;
    }
    activate() {
        return this.authorData
                   .getAll()
                   .then(authors => 
                        this.authors = authors);

    }
                      
    
    
}