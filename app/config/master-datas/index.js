import {loadGenders} from '../../services/masterdata';

// load here all your reference lists
export default [
    { name: 'genders', service: loadGenders },
    {
        name: 'scopes',
        service: () => {
            return Promise.resolve(
                //here call your webservice to get scope references
                [
                    {code: 'ALL', label: 'search.scope.all'},
                    {code: 'movie', label: 'search.scope.movie'},
                    {code: 'person', label: 'search.scope.person'}
                ]
            ).then(scopes => {
                //here define application icons
                scopes.map(_applyAdditionalScopeProperties);
                return scopes  ;
            });
        }
    }
];

function _applyAdditionalScopeProperties(scope) {
    switch (scope.code) {
        case 'ALL':
            scope.icon = 'all_inclusive';
            break;
        case 'movie':
            scope.icon = 'movie'
            break;
        case 'person':
            scope.icon = 'person';
            break;
        default:
            scope.icon = 'mood_bad'
            break;
    }
};
