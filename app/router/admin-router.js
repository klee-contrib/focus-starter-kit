import {application, router} from 'focus-core';
import AdminCountryView from '../views/country/admin';

const AdminRouter = router.extend({
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

new AdminRouter();
