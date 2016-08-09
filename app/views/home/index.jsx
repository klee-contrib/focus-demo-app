import React from 'react';
import {navigate} from 'focus-core/history';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import Rankings from './rankings';
import DemoTitle from '../components/demo-title';

//cartridge configuration
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';
import searchService from '../../services/search';

export default React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],
    /** @inheritDoc */

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        return {
            summary: {
                component: SummaryPageSearch,
                props: { onSearchCriteriaChangeByUser: () => {navigate('/search/advanced')}, service: searchService }
            },
            barLeft: {
                component: DemoTitle
            },
            cartridge: {
                component: CartridgePageSearch,
                props: { onSearchCriteriaChangeByUser: () => {navigate('/search/advanced')}, service: searchService }
            },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <div data-demo='homepage'>
                <Rankings />
            </div>
        );
    }
});
