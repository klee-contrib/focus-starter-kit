// Components
import AppLayout from '../components/app-layout';

// Routes
import { homeRoutes } from './home-routes';
import { movieRoutes } from './movie-routes';

export default {
    path: `${__BASE_URL__}`,
    component: AppLayout,
    indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}home`) },
    childRoutes: [...homeRoutes, ...movieRoutes]
};
