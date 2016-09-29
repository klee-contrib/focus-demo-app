import React from 'react';
import compose from 'lodash/flowRight';
import 'focus-search/style';
// web components
//import Rankings from './rankings';
//import DemoTitle from '../components/demo-title';

import {connect as connectToSearch} from 'focus-search/behaviours/search';
import {unitSearchActions} from '../../action/search';
//import AdSe from 'focus-search/components/advanced-search'


import connectToSelectableList from 'focus-search/components/selectable-list'
import {FacetPanel} from 'focus-search/components/facet';
import ToolBar from 'focus-search/components/toolbar';

import {InformationBar} from 'focus-search/components/informationbar';
import {ResultList, ResultGroup, ListComponent} from 'focus-search/components/results';

//TODO factoriser avec connected-search-bar
const searchOptions= {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions
};


const AdvancedSearch = ({valuesForResults, selectedFacetsList, unitSearchDispatch, facetListWithselectedInformation, isGroup, isSelectable, scope, ListComponent}) => {
  const toolbarProps = {
      group: unitSearchDispatch.group,
      sortList: ['test', 'test'],
      groupList : ['test', 'test'],
      sort: unitSearchDispatch.sort,
      isGroup: isGroup
  }
  return (
      <div data-demo='home-view'>
        <div data-focus='advanced-search'>
            <div data-focus="results-advanced-search">
                <InformationBar selectedFacetsList={selectedFacetsList}
                    facets={facetListWithselectedInformation}
                    totalCount={valuesForResults.totalCount}
                    scopeFunction={unitSearchDispatch.scopeFunction}
                    scope={scope}
                    group={unitSearchDispatch.group}
                    query={unitSearchDispatch.query}
                    deleteFacet={value => unitSearchDispatch.facet(value, true)}
                    data-focus='information-bar-advanced-search' />
                {isGroup ?
                    <ResultGroup isGroup={isGroup}
                        data-focus='result-group-advanced-search'
                        data={valuesForResults}
                        actionsLine={valuesForResults.actionsLine}
                        toolbarProps={toolbarProps}
                        />
                    :
                    <ResultList data={valuesForResults.values}
                        data-focus='result-list-advanced-search'
                        ListComponent={ListComponent}
                        actionsLine={valuesForResults.actionsLine}
                        LineComponent={valuesForResults.LineComponent}
                        toolbarProps={toolbarProps}
                        />
                }
            </div>
            <FacetPanel data={facetListWithselectedInformation}
                data-focus="facet-panel-advanced-search"
                facet={unitSearchDispatch.facet}
                title='My awesome facets'>vhgfgdffg</FacetPanel>
            </div>
      </div>
  )
} ;

AdvancedSearch.displayName = 'AdvancedSearch';
AdvancedSearch.defaultProps = {
    isSelectable:  true,
    isGroup: false,
    unitSearchDispatch: {},
    valuesForResults: {},
    facetListWithselectedInformation: [],
    ListComponent: connectToSelectableList(ListComponent)
};

const ConnectedComponentAdvancedSearch = compose (
    connectToSearch(searchOptions)
)(AdvancedSearch);
export default ConnectedComponentAdvancedSearch;
