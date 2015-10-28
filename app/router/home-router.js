// Dependencies.
const Router = FocusCore.router;

const HomeRouter = Router.extend({
    log: true,
    beforeRoute(){
        FocusCore.application.changeRoute('search');
    },
    routes: {
        '': 'home',
        'home()': 'home'
    },
    home() {
        console.log('ROUTE: HOME');
        const HomeView = require('../views/home');
        this._pageContent(HomeView);
    }
});

module.exports = new HomeRouter();
