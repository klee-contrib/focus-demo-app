import MasterdataView from '../views/masterdata/index';
import CountriesView from '../views/masterdata/country';

const routes = [
    {
        path: 'admin/masterdata',
        component: MasterdataView,
        childRoutes: [
            {
                path: 'countries',
                component: CountriesView
            },

            {
                path: 'movietype'
                // component:
            },
            {
                path: 'gender'
                // component:
            }
        ]
    }
];

export default routes;
