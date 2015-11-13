import FocusCore, {router} from 'focus-core';
import MovieDetailView from '../views/movie/detail';

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
        this._pageContent(MovieDetailView, {props: {id}});
    }
});

export default new MoviesRouter();
