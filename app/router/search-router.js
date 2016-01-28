import application from 'focus-core/application';
import router from 'focus-core/router';
import AdvancedSearchView from '../views/search/advanced';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('search');
    },
    routes: {
        'search/advanced(/:keywords)': 'advanced'
    },
    advanced(keywords) {
        console.log(`ROUTE: SEARCH ADVANCED ${keywords}`);
        this._pageContent(AdvancedSearchView, {props: {keywords : keywords}});
    }
});
