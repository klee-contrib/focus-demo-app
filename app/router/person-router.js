import application from 'focus-core/application';
import {getRouterFunction} from 'focus-core/router/router';
import PersonDetailView from '../views/person/detail';

export default getRouterFunction().extend({
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
