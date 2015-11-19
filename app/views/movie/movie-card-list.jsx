//libraries
import React, {PropTypes} from 'react';

//web components
import MovieCard from './movie-card';

export default React.createClass({
    displayName: 'MovieCardList',
    propTypes: {
        movies: PropTypes.array
    },

    /** @inheritDoc */
    render() {
        const {movies} = this.props;
        return (
            <div data-demo='movie-card-list'>
                {movies &&
                    movies.map(movie => {
                        const {code, movieType, poster, productionYear, title} = movie;
                        const key = `movie-card-${code}`;
                        return (
                            <MovieCard key={key} code={code} movieType={movieType} poster={poster} productionYear={productionYear} title={title} />
                        );
                    })
                }
            </div>
        );
    }
});
