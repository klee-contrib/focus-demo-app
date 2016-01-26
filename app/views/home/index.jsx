import React from 'react';
import {application, history} from 'focus-core';
const {confirm} = application;

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//cartridge configuration
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';


export default React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],

    /** @inheritDoc */
    _navigateAdvancedSearch() {
        history.navigate('#search/advanced', true);
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        return {
            summary: {
                component: SummaryPageSearch,
                props: { onSearchCriteriaChange: this._navigateAdvancedSearch }
            },
            cartridge: {
                component: CartridgePageSearch,
                props: { onSearchCriteriaChange: this._navigateAdvancedSearch }
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
            <div>
                <p><a onClick={() => history.navigate('movies/10053', true)}>Movie 10053</a></p>
                <p><a onClick={() => history.navigate('persons/10', true)}>Person 10</a></p>
                <p><a onClick={() => confirm('Hey there do you want to continue?').then(() => console.log('OK')).catch(()=> console.log('KO'))}> Confirm with string</a></p>
                <p><a onClick={() => confirm(()=> <span>Hey there this is a component</span>).then(() => console.log('OK')).catch(()=> console.log('KO'))}> Confirm with component</a></p>
            </div>
        );
    }
});
