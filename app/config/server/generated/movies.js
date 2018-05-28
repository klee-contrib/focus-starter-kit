import apiDriverBuilder from '../../../utilities/api-driver';
// Movies
export default apiDriverBuilder({

    createMovie: {
        url: __API_ROOT__ + '/api/movie',
        method: 'POST'
    },

    deleteMovie: {
        url: __API_ROOT__ + '/api/movie/${id}',
        method: 'DELETE'
    },

    getMovie: {
        url: __API_ROOT__ + '/api/movie/${id}',
        method: 'GET'
    },

    getMovieList: {
        url: __API_ROOT__ + '/api/movies',
        method: 'GET'
    },

    searchMovie: {
        url: __API_ROOT__ + '/api/movies/search',
        method: 'POST'
    },

    updateMovie: {
        url: __API_ROOT__ + '/api/movie/${id}',
        method: 'PUT'
    }

 });
