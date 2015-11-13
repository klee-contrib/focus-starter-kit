import FocusCore from 'focus-core';

const {builder} = FocusCore.util.url;
const movieRoot = API_ROOT + '/movies/';

export default {
    loadMovie: builder(movieRoot + '${id}', 'GET'),
    updateMovie: builder(movieRoot + '${id}', 'PUT'),
    saveMovieSynopsis: builder(movieRoot + '${id}', 'PUT'),
    saveMoveCaracteristics: builder(movieRoot + '${id}', 'PUT')
};
