import application from 'focus-core/application';
import router from 'focus-core/router';
import AdvancedSearchView from '../views/search/advanced';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('search');
    },
    routes: {
        'search/advanced': 'advanced'
    },
    advanced() {
        this._pageContent(AdvancedSearchView);
    }
});
