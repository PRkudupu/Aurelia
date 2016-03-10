import {HttpClient} from "aurelia-http-client";

export class App {
    constructor () {
        this.message = "";
        this.http = new HttpClient();
    }
    activate() {
        this.message = "calling from activate.";
        return this.http.get("/movies.json")
                            .then(response=> {
                                this.movies = response.content;

            });
                      
    
    }
    ChangeMessage() {
        this.message = " Button click change message.";
       
    }
}