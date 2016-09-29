import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';

const textFor = (str) => {
    return str;
}

const theProps = {textFor: textFor};

export default (listType, list) => {
    switch (listType) {
        case 'MovieIndex':
        return {
            LineComponent: props => <MovieLine {...props} />,
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
        break;
        case 'PersonIndex':
        return {
            LineComponent: props => <div>PersonIndex {JSON.stringify(props)}</div>
        ,
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
    break;
    default:
    return { LineComponent: props => <span>{`Aucun componsant ligne défini pour ${listType}`}</span>}
};
};

function Toto() {
    return <div data-demo='movie-line'>
        <div className='level1'>ddd</div>
        <div className='level2'>ddd</div>
        <div className='level3'>ddd</div>
    </div>
};


const PureMovieLine = ({textFor}) => {
    const code = 0;
    return (
        <div key={code} data-demo='movie-line'>
            <div className='level1'>{textFor('title')}</div>
        </div>
    );
};
const PurePersonLine = ({textFor}) => {
    const code = 0;
    return (
        <div key={code} data-demo='person-line'>
            <div className='level1'>{textFor('fullName')}</div>
            <div className='level2'>{textFor('activity')}</div>
        </div>
    );
};


const MovieLine = compose(
    connectToState(s => {fields: [{label:'toto',name:'title', rawInputValue:'titi'}]}),
    connectToMetadata(['movie']),
    connectToFieldHelpers()
)(PureMovieLine);

const PersonLine = compose(
    connectToState(selectFieldsByFormKey('person')),
    connectToMetadata(['person']),
    connectToFieldHelpers()
)(PurePersonLine);
