import React from 'react';
import {navigate} from 'focus-core/history';
import CoreStore from 'focus-core/store/CoreStore';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import Rankings from './rankings';
import DemoTitle from '../components/demo-title';

//cartridge configuration
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';
import searchService from '../../services/search';
import HelpCenter from '../help-center/';

export default React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],

    showHelpcenter() {
        const {helpFrame} = this.refs.helpCenter.refs;
        if (helpFrame.style.display === 'none') {
            helpFrame.style.display = 'inline';
        } else {
            helpFrame.style.display = 'none';
        }
    },
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
                props: { onSearchCriteriaChangeByUser: () => { navigate('/search/advanced') }, service: searchService }
            },
            barLeft: {
                component: DemoTitle
            },
            cartridge: {
                component: CartridgePageSearch,
                props: { onSearchCriteriaChangeByUser: () => { navigate('/search/advanced') }, service: searchService }
            },
            actions: {
                primary: [{ label: 'Help Center', icon: 'help_outline', action: () => { this.showHelpcenter() } }],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <div data-demo='homepage'>
                <HelpCenter ref='helpCenter' />
                <Rankings/>
            </div>
        );
    }
});
