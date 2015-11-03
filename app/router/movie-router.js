import FocusCore from 'focus-core';

// Dependencies.
import {router} from 'focus-core';

const MoviesRouter = router.extend({
    log: true,
    beforeRoute() {
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

const movieRouter = new MoviesRouter();
export default movieRouter;
