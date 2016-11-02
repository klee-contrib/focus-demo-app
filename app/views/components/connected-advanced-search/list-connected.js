//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToSearch} from 'focus-search/behaviours/search';

import {compose} from 'redux';

//actions
import {ResultList, ResultGroup, ListComponentWithToolBar} from 'focus-search/components/results';
import {unitSearchActions} from '../../../action/search';

import connectToSelectableList from 'focus-search/components/selectable-list'

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';


class MovieCaracteristics extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
    }
    /** @inheritDoc */
    render() {
        const {isGroup, ListComponent, ResultListProps, ResultGroupProps} = this.props;
        return (
            <div>
            {isGroup ?
              <ResultGroup isGroup={isGroup}
                  ListComponent={ListComponent}
                  data-focus='result-group-advanced-search'
                  {...ResultGroupProps}
                  />
                :
                <ResultList
                    data-focus='result-list-advanced-search'
                    ListComponentWithToolBar={ListComponent}
                    isGroup={isGroup}
                    {...ResultListProps}
                    />g
            }
            </div>
        );
    }
};

MovieCaracteristics.displayName = 'MovieCaracteristics';

MovieCaracteristics.defaultProps = {
  ListComponent: connectToSelectableList(ListComponentWithToolBar)
}

const searchOptions = {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions,
    scope: "Movie"
};
export default compose(
    connectToMetadata(['movie']),
    connectToSearch(searchOptions),
    connectToFieldHelpers()
)(MovieCaracteristics);
