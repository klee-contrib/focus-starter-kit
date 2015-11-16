import {CoreStore} from 'focus-core/store';

/**
* Store dealing with subjects about persons.
* @type {focus}
*/
const personStore = new CoreStore({
    definition: {
        person: 'person'
    }
});

export default personStore;
