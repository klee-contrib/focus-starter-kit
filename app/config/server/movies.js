import builder from 'focus-core/util/url/builder';

const movieRoot = './movies/';

export default {
    /* loads */
    loadMovie: builder(movieRoot + '${id}', 'GET'),
    loadMoviePeople: builder(movieRoot + '${id}/people', 'GET'),
    loadMovieActors: builder(movieRoot + '${id}/actors', 'GET'),
    loadMovieCameramen: builder(movieRoot + '${id}/cameramen', 'GET'),
    loadMovieDirectors: builder(movieRoot + '${id}/directors', 'GET'),
    loadMovieProducers: builder(movieRoot + '${id}/producers', 'GET'),
    loadMovieWriters: builder(movieRoot + '${id}/writers', 'GET'),

    /* save */
    saveMovie: builder(movieRoot + '${id}', 'PUT'),

    /* search movie */
    searchMovie: builder(movieRoot + '/search', 'POST')
};
