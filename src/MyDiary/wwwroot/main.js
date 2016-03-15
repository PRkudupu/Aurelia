export function configure(aurelia) {
    //Tell aurelia to use. provide standard configuration and development logging
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    //tell aurelia to start. This can be aynchronous
    //It is going to return a promise
    //On the promise, given a variable a that represents Aurelia. set the root to use to be the document object module 
    //This is the place where we can take control of the application by specifying what module what i want to load
    aurelia.start().then(a => a.setRoot());


}