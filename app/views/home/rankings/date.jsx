import React, {Component} from 'react';
import MovieCard from './movie-card';
import {translate} from 'focus-core/translation';

const DateRanking = ({dateRanking}) => (
    <div data-role='ranking'>
        <h1>{translate('movie.rankings.latest.title')}</h1>
        <div data-role='cards'>
            {dateRanking.map(movie => <MovieCard key={movie.code} {...movie}/>)}
        </div>
    </div>
);

export default DateRanking;
