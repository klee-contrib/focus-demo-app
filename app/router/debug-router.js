import application from 'focus-core/application';
import router from 'focus-core/router';
import DebugView from '../views/debug';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('debug');
    },
    routes: {
        'debug': 'debug'
    },
    debug() {
        this._pageContent(DebugView);
    }
});
