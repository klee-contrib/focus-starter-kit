import FocusCore from 'focus-core';

// Dependencies.
import {router} from 'focus-core';

const MoviesRouter = router.extend({
    log: true,
    beforeRoute() {
        FocusCore.application.changeRoute('movies');
    },
    routes: {
        'movies(/:id)': 'movies'
    },
    movies(id) {
        console.log(`ROUTE: MOVIES ${id}`);
        const MovieDetailView = require('../views/movie/detail');
        this._pageContent(MovieDetailView, {props: {id}});
    }
});

export default new MoviesRouter();
