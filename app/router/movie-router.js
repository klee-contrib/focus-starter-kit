import FocusCore from 'focus-core';

// Dependencies.
const Router = FocusCore.router;

const MoviesRouter = Router.extend({
    log: true,
    beforeRoute(){
        FocusCore.application.changeRoute('movies');
    },
    routes: {
        'movies(/:movieId)': 'movies'
    },
    movies(movieId) {
        console.log(`ROUTE: MOVIES ${movieId}`);
        const MovieDetailView = require('../views/movie/detail');
        this._pageContent(MovieDetailView);
    }
});

module.exports = new MoviesRouter();
