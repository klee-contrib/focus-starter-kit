import FocusCore from 'focus-core';
import URL from '../config/server';

const {fetch} = FocusCore.network;

export default {
    loadMovie(id) {
        return fetch(URL.movies.loadMovie({urlData: {id}}));
    },

    updateMovie(movie) {
        return fetch(URL.movies.updateMovie({data: movie}));
    }
}
