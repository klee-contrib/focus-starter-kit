// Apis
import moviesApi from '../config/server/generated/movies';

export const movieServices = {
    loadMovieCharacteristics(id) {
        return moviesApi.getMovie({ id });
    },
    updateMovieCharacteristics(movie) {
        const movieId = movie.id;
        return moviesApi.updateMovie({ id: movieId }, movie);
    }
};
