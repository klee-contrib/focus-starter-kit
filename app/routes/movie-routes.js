import React from 'react';
import MovieDetail from '../views/movie/detail';
import MovieList from '../views/movie/list';

/**
 * Sample Administration view.
 * @returns {JSX.element} content of the view
 */

const routes = [
    {
        path: 'movies',
        component: MovieList
    },
    {
        path: 'movie/:id',
        component: props => <MovieDetail {...props.params} />
    }
];

export default routes;
