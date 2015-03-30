/* global focus*/
/**
 * Store dealing with the movie subject.
 * @type {focus}
 */
var peopleStore = new focus.store.CoreStore({
    definition : {
        'people': 'people',
        'filmography': 'filmography'
    }
  });
module.exports = peopleStore;
