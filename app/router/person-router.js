import {application, router} from 'focus-core';
import PersonDetailView from '../views/person/detail';

const PersonsRouter = router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('persons');
    },
    routes: {
        'persons(/:id)': 'persons'
    },
    persons(id) {
        console.log(`ROUTE: PERSONS ${id}`);
        this._pageContent(PersonDetailView, {props: {id : +id}});
    }
});

new PersonsRouter();
