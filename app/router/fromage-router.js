import application from 'focus-core/application';
import router from 'focus-core/router';
import HomeView from '../views/home';

import React from 'react';

const leComposantKonVaVirer = () => {
    return (<div>Le fromage c'est la vie</div>)
}

export default router.extend({
    log: true,
    routes: {
        fromage: 'fromage'
    },
    fromage() {
        this._pageContent(leComposantKonVaVirer);
    }
});
