import React from 'react';
import compose from 'lodash/flowRight';

import ConnectedSearchBarComponent from '../components/connected-search-bar';
import ConnectedAdvancedSearch from '../components/advanced-search';
//import ConnectedSearch from '../components/connected-advanced-search';
const Home = () => (
    <div data-demo='home-view'>
        <ConnectedSearchBarComponent />
        <ConnectedAdvancedSearch/>
    </div>
);

Home.displayName = 'Home';
export default Home;
