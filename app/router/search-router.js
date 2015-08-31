// Dependencies.

const Router = Focus.router;

const SearchRouter = Router.extend({
    log: true,
    beforeRoute(){
        Focus.application.changeRoute('search');
    },
    routes: {
    }
});

module.exports = new SearchRouter();
