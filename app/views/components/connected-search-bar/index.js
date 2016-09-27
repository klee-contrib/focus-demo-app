import React from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';
import SearchBar from 'focus-search/components/searchbar';
import {unitSearchActions} from '../../../action/search';

const searchOptions = {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions
};

// search bar component
const SearchBarComponent = ({unitSearchDispatch: {group, query, scopeFunction}, scope, scopes}) => (
    <SearchBar group={group} query={query} scopes={scopes} scope={scope} scopeFunction={scopeFunction}/>
);

// search bar component connected to search store
const ConnectedSearchBarComponent = compose(
    connectToSearch(searchOptions)
)(SearchBarComponent);
export default ConnectedSearchBarComponent;
