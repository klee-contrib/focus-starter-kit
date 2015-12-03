//libraries
import React, {PropTypes} from 'react';

//web components
import MovieCard from './movie-card';

function MovieCardList({movies}) {
    return (
        <div data-demo='concept-card-list'>
        {movies &&
            movies.map(movie => {
                const {code, linked, movieType, poster, productionYear, title} = movie;
                const key = `movie-card-${code}`;
                return (
                    <MovieCard key={key} code={code} linked={linked} movieType={movieType} poster={poster} productionYear={productionYear} title={title} />
                );
            })
        }
        </div>
    );
}

MovieCardList.displayName = 'MovieCardList';
MovieCardList.propTypes = {
    movies: PropTypes.array
};
export default MovieCardList;
