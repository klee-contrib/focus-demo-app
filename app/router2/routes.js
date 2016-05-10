import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from '../components/layout'
import HomeRoute from './home-route';
import MasterdataRoutes from './masterdataRoutes';

export default {
    path: `${__BASE_URL__}`,
    indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}home`) },
    component: AppLayout,
    childRoutes: [...HomeRoute, ...MasterdataRoutes]
};
