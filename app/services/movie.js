import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(movieUrl.loadMovie({urlData: {id}}), {isCORS: true});
    },
    loadMovieCasting(id) {
        console.log(`[MOVIE] call loadMovieCasting(${id}) method`);
        return fetch(movieUrl.loadMovie({urlData: {id}}), {isCORS: true}).then(({actors, camera, directors, producers, writers}) => {
            return {actors, camera, directors, producers, writers};
        });;
    },
    saveMovieSynopsis(data) {
        console.log(`[MOVIE] call saveMovieSynopsis method. id=${data.id} data=${data}`);
        return fetch(movieUrl.saveMovie({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    },
    saveMovieCaracteristics(data) {
        console.log(`[MOVIE] call saveMovieCaracteristics method. id=${data.id} data=${data}`);
        return fetch(movieUrl.saveMovie({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    },
    searchMovie(criteria) {
        console.log(`[MOVIE] call searchMovie method. criteria=${criteria}`);
        return fetch(movieUrl.saveMovie(criteria), {isCORS: true});
    }
}
