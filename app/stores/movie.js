import FocusCore from 'focus-core';

/**
* Store dealing with subjects about movies.
* @type {focus}
*/
const movieStore = new FocusCore.store.CoreStore({
    definition: {
        movie: 'movie'
    }
});

export default movieStore;
