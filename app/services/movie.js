import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(movieUrl.loadMovie({urlData: {id}}));
    },
    saveMovieSynopsis(data) {
        console.log(`[MOVIE] call saveMovieSynopsis method. id=${data.id} data=${data}`);
        return fetch(movieUrl.saveMovie({urlData: {id: data.id}, data: {data}}));
    },
    saveMovieCaracteristics(data) {
        console.log(`[MOVIE] call saveMovieCaracteristics method. id=${data.id} data=${data}`);
        return fetch(movieUrl.saveMovie({urlData: {id: data.id}, data: {data}}));
    }
}
