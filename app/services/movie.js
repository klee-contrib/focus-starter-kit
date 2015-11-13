import FocusCore from 'focus-core';
import URL from '../config/server';

const {fetch} = FocusCore.network;

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(URL.movies.loadMovie({urlData: {id}}));
    },
    saveMovieSynopsis(data) {
        console.log(`[MOVIE] call saveMovieSynopsis method. id=${data.id} data=${data}`);
        return fetch(URL.movies.saveMovie({urlData: {id: data.id}, data: {data}}));
    },
    saveMovieCaracteristics(data) {
        console.log(`[MOVIE] call saveMovieCaracteristics method. id=${data.id} data=${data}`);
        return fetch(URL.movies.saveMovie({urlData: {id: data.id}, data: {data}}));
    }
}
