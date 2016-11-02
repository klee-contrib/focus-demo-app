import React from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';
import {SearchBar} from 'focus-search/components/searchbar';
import {unitSearchActions} from '../../../action/search';
import {AdvancedSearch} from 'focus-search/components/advanced-search';

const searchOptions = {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions
};

// search bar component connected to search store
const ConnectedSearch = compose(
    connectToSearch(searchOptions)
)(AdvancedSearch);
export default ConnectedSearch;
