
//This view models responsible 
export class App {
   
    //If a view model exposes a method known as configureRouter() Aurelia would automatically invoke that method and pass in 2 parameters
    //config: that we can use to express the rules
    //Router: instance of the router
    //conceptually similar to server side framework
    //{ route --> information about the url should look like,instructions about what to do when the url and the route match
    //{route:"details/:id indicates parameter place holder
    //{route : ["","list"],moduleId:"movies/list",title:"List",nav:true}
    
    configureRouter(config, router) {
        this.router = router;
            config.map([
                { route:["", "list"], moduleId:"authors/list", 
                    title:"List", nav:true, name:"home" },
                { route:"about", moduleId:"about/about", 
                    title:"About", nav:true},
                { route:"binding",moduleId:"binding/binding", 
                title:"Binding",nav:true},
                { route:"List",moduleId:"person/list", 
                title:"Person",nav:true},
                { route:"HelloWorld",moduleId:"helloworld/helloworld", 
                     title:"Helloworld",nav:true},
                { route:"details/:id", moduleId:"authors/details" }
                
            ]);
    }
    
      
}