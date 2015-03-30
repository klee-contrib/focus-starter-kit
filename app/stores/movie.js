/* global focus*/
/**
 * Store dealing with the movie subject.
 * @type {focus}
 */
var movieStore = new focus.store.CoreStore({
    definition : {
        'movie': 'movie',
        'castings': 'movieCasting'
    }
  });
module.exports = movieStore;
