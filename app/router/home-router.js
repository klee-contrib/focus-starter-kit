import FocusCore from 'focus-core';
const {router} = FocusCore;

const HomeRouter = router.extend({
    log: true,
    beforeRoute() {
        console.log('Home router');
        FocusCore.application.changeRoute('home');
    },
    routes: {
        '': 'home',
        home: 'home'
    },
    home() {
        console.log('ROUTE: HOME');
        const HomeView = require('../views/home');
        this._pageContent(HomeView);
    }
});

const homeRouter = new HomeRouter();
export default homeRouter;
