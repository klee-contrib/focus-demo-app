import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';


function PureMovieLine ({textFor}) {
    const code = 0;
    return (
        <div key={code} data-demo='movie-line'>
            <div className='level1'>{textFor('title')}</div>
        </div>
    );
};

const MovieLine = compose(
    connectToState(s => {fields: [{label:'toto',name:'title', rawInputValue:'titi'}]}),
    connectToMetadata(['movie']),
    connectToFieldHelpers()
)(PureMovieLine);


export default {
    LineComponent: props => (<MovieLine {...props} />),
    actionsLine: [
        {label: 'Yo', icon: 'print', action: () => {console.log('action')}},
        {label: 'La', icon: 'print', action: () => {console.log('action')}}
    ],
    sortList : [
        'ouuuuaaa',
        'trrropo',
        'lalal'
    ],
    groupList: [
        'lala',
        'lulu',
        'lolo'
    ]
};
