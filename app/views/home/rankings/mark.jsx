import React, {Component} from 'react';
import MovieCard from './movie-card';
import {translate} from 'focus-core/translation';

const MarkRanking = ({markRanking}) => (
    <div data-role='ranking'>
        <h1>{translate('view.movie.rankings.best.title')}</h1>
        <div data-role='cards'>
            {markRanking.map(movie => <MovieCard key={movie.code} {...movie}/>)}
        </div>
    </div>
);

export default MarkRanking;
