import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

//let keyword defines variables inside a block
let baseUrl = "/authors.json";
@inject(HttpClient)
export class AuthorData {
    constructor (httpClient) {
        this.http = httpClient;
    }
    getAll() {
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }
}