/* Nouvelle façon */
import movieApiDriver from '../config/server/generated/movies';

export default {
    getMovie(id) {
        return movieApiDriver.getMovie({ id });
    },
    updateMovie(data) {
        const id = data.id;
        return movieApiDriver.updateMovie({ id }, data);
    },
    searchMovie({ urlData, data }) {
        const { criteria } = data;
        return movieApiDriver.searchMovie(urlData, criteria);
    }
}
