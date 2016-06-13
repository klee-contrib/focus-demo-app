import MasterdataView from '../views/masterdata/index';
import CountriesView from '../views/masterdata/country';

const routes = [
    {
        path: 'admin/masterdata',
        component: MasterdataView,
        indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}admin/masterdata/countries`) },
        childRoutes: [
            {
                path: 'countries',
                component: CountriesView
            }, {
                path: 'movietype'
            }, {
                path: 'gender'
            }
        ]
    }
];

export default routes;
