import {application, router} from 'focus-core';
import AdvancedSearchView from '../views/search/advanced';

const MoviesRouter = router.extend({
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

new MoviesRouter();
