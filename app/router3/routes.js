import Home from '../views/home';
import MasterData from '../views/masterdata';

const rootRoute = {
    component: 'div',
    childRoutes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/admin/masterdata',
            component: MasterData,
            childRoutes: [
                require('./masterdata')
            ]
        }
    ]
}

module.exports = rootRoute;
