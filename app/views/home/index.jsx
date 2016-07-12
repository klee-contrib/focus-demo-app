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

import ScheduleDaysPicker from '../components/schedule-days-picker';
import ScheduleMonthsPicker from '../components/schedule-months-picker';

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
                <ScheduleDaysPicker onClickDay={(day) => alert('You clicked ' + day + ' !')} selectedDays={[9, 12]} />
                <ScheduleMonthsPicker onClickMonth={(month) => alert('You clicked ' + month + ' !')} selectedMonths={[2]} />
            </div>
        );
    }
});
