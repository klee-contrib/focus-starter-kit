import application from 'focus-core/application';
import router from 'focus-core/router';
import AdminCountryView from '../views/country/admin';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('admin');
    },
    routes: {
        'admin/countries': 'countries'
    },
    countries() {
        this._pageContent(AdminCountryView);
    }
});
