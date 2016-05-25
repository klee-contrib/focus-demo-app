import application from 'focus-core/application';
import router from 'focus-core/router';
import AdvancedSearchView from '../views/search/advanced';
import dispatcher from 'focus-core/dispatcher';

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('search');
    },
    routes: {
        'search/advanced': 'advanced'
    },
    advanced() {
        // RESET of store
        dispatcher.handleViewAction({
            data: {
                selectedFacets: null,
                groupingKey: null,
                results: [],
                facets: [],
                totalCount: 0
            },
            type: 'update',
            identifier: 'ADVANCED_SEARCH'
        });
        this._pageContent(AdvancedSearchView);
    }
});
