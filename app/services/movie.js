import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(movieUrl.load({urlData: {id}}), {isCORS: true});
    },
    loadMovieCasting(id) {
        console.log(`[MOVIE] call loadMovieCasting(${id}) method`);
        return fetch(movieUrl.load({urlData: {id}}), {isCORS: true}).then(({actors, camera, directors, producers, writers}) => {
            return {actors, camera, directors, producers, writers};
        });
    },
    updateMovieCaracteristics(data) {
        console.log(`[MOVIE] call saveMovieCaracteristics method. data=${JSON.stringify(data)}`);
        delete data.writers;
        return fetch(movieUrl.update({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    },
    updateMovieSynopsis(data) {
        console.log(`[MOVIE] call saveMovieSynopsis method. data=${JSON.stringify(data)}`);
        delete data.writers;
        return fetch(movieUrl.update({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    }
}
