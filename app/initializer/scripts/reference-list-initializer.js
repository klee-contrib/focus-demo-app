import {config} from 'focus-core/reference';

// Path to the reference service.
// const referenceService = require('../services/reference');

// load here all your reference lists
export default () => {
    console.info('|--- REFERENCES');

    config.set({
        scopes: () => {
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
        },
        regions:() => Promise.resolve([{code: 'NPP', label :'Nord Pas de Calais Picardie'}, {code: 'IDF', label: 'Ile de France'}]),
        departements: () => Promise.resolve([
          {rcode: 'NPP', code: 'N', label :'Nord'},
          {rcode: 'NPP', code: 'PDC', label :'Pas de Calais'},
          {rcode: 'NPP', code: 'PIC', label :'Picardie'},
          {rcode: 'IDF', code: 'PA', label: 'Paris'},
          {rcode: 'IDF', code: 'HS', label: 'HS'}
        ])
    });
}

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
}
