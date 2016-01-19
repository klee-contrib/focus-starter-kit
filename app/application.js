import history from 'focus-core/history';

export default function startApp() {
    //Start the application.
    console.info('############# Application starting ############');
    console.info('Load all the routes...');
    require('./router');
    console.info('All the routes are loaded...');

    //Start the router.
    history.start();
}
