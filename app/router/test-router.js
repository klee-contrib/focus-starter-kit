import {router, application} from 'focus-core';
import ErorView from '../views/test/error';

const ErrorRouter = router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('test');
    },
    routes: {
        'test/error': 'error'
    },
    error(id) {
        console.log(`ROUTE: ERROR`);
        this._pageContent(ErorView, {props: {id}});
    }
});

export default new ErrorRouter();
