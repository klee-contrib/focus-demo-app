import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';


function PurePersonLine({textFor, ...props}) {
    const code = 0;
    return (
        <div key={code} data-demo='person-line'>
          Bonjour
          <div className='level1'>{textFor('fullName', {entityPath: 'person'})}</div>

        </div>
    );
};

const PersonLine = compose(
  connectToMetadata(['person']),
  connectToFieldHelpers()
)(PurePersonLine);


export default {
    LineComponent: props => (<div></div>),
    sortList : [
        'lala',
        'lolo',
        'lulu'
    ],
    groupList: [
        'lala',
        'lulu'
    ]
};
