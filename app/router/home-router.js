import application from 'focus-core/application';
import {getRouterFunction} from 'focus-core/router/router';
import HomeView from '../views/home';

export default getRouterFunction().extend({
    log: true,
    beforeRoute() {
        application.changeRoute('home');
    },
    routes: {
        '': 'home',
        home: 'home'
    },
    home() {
        this._pageContent(HomeView);
    }
});
