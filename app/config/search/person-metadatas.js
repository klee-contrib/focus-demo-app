import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';


function PurePersonLine({textFor}) {
    const code = 0;
    return (
        <div key={code} data-demo='person-line'>
            <div className='level1'>{textFor('fullName')}</div>
            <div className='level2'>{textFor('activity')}</div>
        </div>
    );
};

const PersonLine = compose(
    connectToState(selectFieldsByFormKey('person')),
    connectToMetadata(['person']),
    connectToFieldHelpers()
)(PurePersonLine);


export default {
    LineComponent: props => (<PersonLine {...props} />),
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
