import application from 'focus-core/application';
import router from './demo-default-router';
import ErorView from '../views/test/error';

export default router.extend({
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
