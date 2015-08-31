// Dependencies.

const Router = Focus.router;
const HomeRouter = Router.extend({
    log: true,
    beforeRoute(){
        Focus.application.changeRoute('search');
    },
    routes: {
        '': 'home',
        'home(/scope/:scope)': 'home'
    },
    home(scope) {
        console.log('ROUTE: HOME');
        const HomeView = require('../views/home');
        this._pageContent(HomeView, {props: {
            scope: scope || 'ALL', //Scope all by default here?
            position: 'left',
            open: true,
            style: {className: 'home-popin'}}}
        );
    }
});

module.exports = new HomeRouter();
