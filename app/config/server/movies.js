import FocusCore from 'focus-core';

const {builder} = FocusCore.util.url;
const movieRoot = API_ROOT + '/movies/';

export default {
    loadMovie: builder(movieRoot + '${id}', 'GET'),
    saveMovieSynopsis: builder(movieRoot + '${id}', 'PUT'),
    saveMovieCaracteristics: builder(movieRoot + '${id}', 'PUT')
};
