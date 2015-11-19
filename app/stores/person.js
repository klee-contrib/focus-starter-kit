import {CoreStore} from 'focus-core/store';

/**
* Store dealing with subjects about persons.
* @type {focus}
*/
const personStore = new CoreStore({
    definition: {
        person: 'person',
        movies: 'movies'
    }
});

export default personStore;
