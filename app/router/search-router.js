// Dependencies.

const Router = FocusCore.router;

const SearchRouter = Router.extend({
    log: true,
    beforeRoute(){
        FocusCore.application.changeRoute('search');
    },
    routes: {
    }
});

module.exports = new SearchRouter();
