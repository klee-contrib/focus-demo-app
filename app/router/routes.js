import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from '../components/layout'
import HomeRoute from './home-route';
import MasterdataRoutes from './masterdata-routes';
import MoviesRoutes from './movies-route';
import PersonsRoutes from './persons-route';
import SearchRoutes from './advanced-search-route';
import ErrorRoutes from './error-route';

export default {
    path: `${__BASE_URL__}`,
    indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}home`) },
    component: AppLayout,
    childRoutes: [...HomeRoute, ...MasterdataRoutes, ...MoviesRoutes, ...PersonsRoutes, ...SearchRoutes, ...ErrorRoutes]
};
