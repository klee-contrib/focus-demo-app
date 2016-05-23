import application from 'focus-core/application';
import {getRouterFunction} from 'focus-core/router/router';
import ErorView from '../views/test/error';

export default getRouterFunction().extend({
    log: true,
    beforeRoute() {
        application.changeRoute('test');
    },
    routes: {
        'test/error': 'error'
    },
    error(id) {
        this._pageContent(ErorView, {props: {id}});
    }
});
