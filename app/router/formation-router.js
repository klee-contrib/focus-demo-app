import React from 'react';
import application from 'focus-core/application';
import router from 'focus-core/router';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('demo');
    },
    routes: {
        '': 'demoRouteHandler',
        'demo': 'demoRouteHandler'
    },
    demoRouteHandler() {
        console.log('ROUTER: DEMO');
        //Page content vient du router
        this._pageContent(props => <p><h2>Bienvenue à la formation du 29/11/2016</h2></p>);
    }
});
