import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';
import {buildFieldForLineSearch} from 'focus-search/store'




function PurePersonLine({textFor, ...props}) {
    return (
        <div data-demo='person-line'>
         {textFor('fullName', {entityPath: 'person'})}
        </div>
    );
};

const config = {
  searchName: 'advancedSearch',
  codeId : 'perId',
  entityPath: 'person',
  code: 'PERSON'
}
const PersonLine = compose(
  connectToMetadata(['person']),
  connectToState(buildFieldForLineSearch(config)),
  connectToFieldHelpers()
)(PurePersonLine);


export default {
    lineIdentifierProperty : 'perId',
    LineComponent: props => (<PersonLine {...props}/>),
    sortList : [
        {label: 'lala', code: 'dhjskhfdkhsk'}
    ],
    groupList: [
        {label: 'ruex', code: 'fkjdsf'}
    ]
};
