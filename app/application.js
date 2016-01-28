import history from 'focus-core/history';
import {registerRoutes} from './router';

export default function startApp() {
    //Start the application.
    console.info('##################### Application starting #########################');
    console.info('Load all the routes...');
    registerRoutes();
    console.info('All the routes are loaded...');
    console.info('####################################################################');

    //Start the router.
    history.start();
}
