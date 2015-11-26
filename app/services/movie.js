import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(movieUrl.loadMovie({urlData: {id}}));
    },
    loadMoviePeople(id) {
        console.log(`[MOVIE] call loadMoviePeople(${id}) method`);
        return fetch(movieUrl.loadMoviePeople({urlData: {id}}));
    },
    loadMovieActors(id) {
        console.log(`[MOVIE] call loadMovieActors(${id}) method`);
        return fetch(movieUrl.loadMovieActors({urlData: {id}}));
    },
    loadMovieCameramen(id) {
        console.log(`[MOVIE] call loadMovieCameramen(${id}) method`);
        return fetch(movieUrl.loadMovieCameramen({urlData: {id}}));
    },
    loadMovieDirectors(id) {
        console.log(`[MOVIE] call loadMovieDirectors(${id}) method`);
        return fetch(movieUrl.loadMovieDirectors({urlData: {id}}));
    },
    loadMovieProducers(id) {
        console.log(`[MOVIE] call loadMovieProducers(${id}) method`);
        return fetch(movieUrl.loadMovieProducers({urlData: {id}}));
    },
    loadMovieWriters(id) {
        console.log(`[MOVIE] call loadMovieWriters(${id}) method`);
        return fetch(movieUrl.loadMovieWriters({urlData: {id}}));
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
