
import ListStore from 'focus-core/store/list';

const movieListStore = new ListStore({
    identifier: 'movieList'
})

movieListStore.name = 'MovieListStore';

export default movieListStore