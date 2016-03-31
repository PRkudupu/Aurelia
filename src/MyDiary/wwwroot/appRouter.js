import {Router} from 'aurelia-router'
export class App{
    static inject =[Router ];
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Contacts';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select' },
                { route: 'contacts/:id', moduleId: 'contact-detail' }
            ]);
        });
    }
}