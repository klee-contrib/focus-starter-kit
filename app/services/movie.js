import FocusCore from 'focus-core';
import URL from '../config/server';

const {fetch} = FocusCore.network;

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(URL.movies.loadMovie({urlData: {id}}));
    },
    saveMovieSynopsis(data) {
        console.console.log(`[MOVIE] call saveMovieSynopsis method. data=${data}`);
        return fetch(URL.movies.saveMovieSynopsis({data: data}));
    },
    saveMovieCaracteristics(data) {
        console.console.log(`[MOVIE] call saveMovieCaracteristics method. data=${data}`);
        return fetch(URL.movies.saveMovieCaracteristics({data: data}));
    }
}
