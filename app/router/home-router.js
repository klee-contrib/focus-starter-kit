/*global Backbone, Focus, Focus.components */
//Dependencies.
let Router = Focus.router;
let HomeRouter = Router.extend({
    log: true,
    beforeRoute(){
        Focus.application.changeRoute('search');
    },
    routes: {
        '': 'home',
        'home(/scope/:scope)': 'home',
        'contact/:id': 'contactDetail'
    },
    home(scope, query) {
        console.log('ROUTE: HOME');
        let HomeView = require('../views/home');
        this._pageContent(HomeView, {props: {
            scope: scope || 'ALL', //Scope all by default here?
            position: 'left',
            open: true,
            style: {className: 'home-popin'}}}
        );
    },
    contactDetail(id){
        //Récupération de la page de contact.
        let ContactDetailView = require('../views/contact');
        //Insertion de la page de detail dans le contenu de la page.
        this._pageContent(ContactDetailView, {props: {id}});
    }
});

module.exports = new HomeRouter();
