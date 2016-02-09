import React from 'react';

const MovieCard = ({poster, originalTitle, productionYear}) => (
    <div data-role='movie-card'>
        <div data-role='poster'>
            <i className='material-icons'>local_movies</i>
            <img src={poster}/>
        </div>
        <div data-role='title'>{originalTitle}</div>
        <div data-role='year'>{productionYear}</div>
    </div>
);

export default MovieCard;
