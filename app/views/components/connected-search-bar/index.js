import React from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';
import {SearchBar} from 'focus-search/components/searchbar';
import {unitSearchActions} from '../../../action/search';

const searchOptions = {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions,
    test: 'lala'
};

// search bar component
const SearchBarComponent = ({ SearchBarProps: {scopeList, scopes, unitSearchDispatch: {groupAction, queryAction, scopeAction}}}) => (
    <SearchBar data-focus='test' queryAction={queryAction} scopes={scopes} scope={scopeList} scopeAction={scopeAction}/>
);

// search bar component connected to search store
const ConnectedSearchBarComponent = compose(
    connectToSearch(searchOptions)
)(SearchBarComponent);
export default ConnectedSearchBarComponent;
