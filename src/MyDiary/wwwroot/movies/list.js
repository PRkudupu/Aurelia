﻿import {inject} from "aurelia-framework"
import {MovieData} from "./movieData";

@inject(MovieData)
export class List {
    constructor (MovieData) {
        this.message = "";
        this.movieData = MovieData;
    }
    activate() {
        return this.movieData
                   .getAll()
                   .then(movies => 
                    this.movies = movies);

    }
                      
    
    
}