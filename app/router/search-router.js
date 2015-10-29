import FocusCore from 'focus-core';

// Dependencies.

const Router = FocusCore.router;

export default Router.extend({
    log: true,
    beforeRoute() {
        FocusCore.application.changeRoute('search');
    },
    routes: {
    }
});
