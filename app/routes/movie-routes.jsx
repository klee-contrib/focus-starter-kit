// Libs
import React from 'react';

// Components
import { MovieDetailPage } from '../views/movies/movie-detail';

export const movieRoutes = [
    {
        path: 'movies/:id',
        component: ({ params }) => <MovieDetailPage id={params.id} />
    }
];
