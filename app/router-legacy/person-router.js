import application from 'focus-core/application';
import router from 'focus-core/router';
import PersonDetailView from '../views/person/detail';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('persons');
    },
    routes: {
        'persons(/:id)': 'persons'
    },
    persons(id) {
        this._pageContent(PersonDetailView, {props: {id : +id}});
    }
});
