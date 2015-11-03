import FocusCore from 'focus-core';
const {router} = FocusCore;

const HomeRouter = router.extend({
    log: true,
    beforeRoute() {
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

export default new HomeRouter();
