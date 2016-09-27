import React from 'react';
import compose from 'lodash/flowRight';

// web components
//import Rankings from './rankings';
//import DemoTitle from '../components/demo-title';
// import AdvancedSearch from 'focus-search/components/advanced-search';
// import {connect as connectToSearch} from 'focus-search/behaviours/search';
import ConnectedSearchBarComponent from '../components/connected-search-bar';
// import {unitSearchActions} from '../../action/search';

// //TODO factoriser avec connected-search-bar
// const searchOptions= {
//     searchName : 'advancedSearch',
//     unitSearch : unitSearchActions
// };
//
// const ConnectedComponentAdvancedSearch = compose (
//     connectToSearch(searchOptions)
// )(AdvancedSearch);


const Home = () => (
    <div data-demo='home-view'>
        <ConnectedSearchBarComponent />
    </div>
);

Home.displayName = 'Home';
export default Home;
