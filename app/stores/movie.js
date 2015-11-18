import {CoreStore} from 'focus-core/store';

/**
* Store dealing with subjects about movies.
* @type {focus}
*/
const movieStore = new CoreStore({
    definition: {
        movie: 'movie',
        actors: 'actors',
        cameramen: 'cameramen',
        directors: 'directors',
        producers: 'producers',
        writers: 'writers'
    }
});

export default movieStore;
