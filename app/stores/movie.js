import {CoreStore} from 'focus-core/store';

/**
* Store dealing with subjects about movies.
* @type {focus}
*/
const movieStore = new CoreStore({
    definition: {
        movie: 'movie'
    }
});

export default movieStore;
