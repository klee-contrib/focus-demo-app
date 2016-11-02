import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';
import {buildFieldForLineSearch} from 'focus-search/store'


import get from 'lodash/get';
import identity from 'lodash/identity'


function PureMovieLine ({textFor, ...props}) {
    const code = 0;
    return (
        <div key={code} data-demo='movie-line'>
          <div className='level1'>{textFor('title', {entityPath: 'movie'})}</div>
          <div className='level2'>{textFor('movieType', {entityPath: 'movie'})}</div>
          <div className='level3'>{textFor('productionYear', {entityPath: 'movie'})}</div>
        </div>
    );
};

const config = {
  searchName: 'advancedSearch',
  codeId : 'movId',
  entityPath: 'movie',
  code: 'MOVIE'
}

const MovieLine = compose(
  connectToMetadata(['movie']),
  connectToState(buildFieldForLineSearch(config)),
  connectToFieldHelpers()
)(PureMovieLine);


export default {
    lineIdentifierProperty : 'movId',
    LineComponent: props => (<MovieLine {...props} />),
    actionsLine: [
        {label: 'Yo', icon: 'print', action: () => {console.log('action')}},
        {label: 'La', icon: 'print', action: () => {console.log('action')}}
    ],
    sortList : [
      {label: 'lala', code: 'TITLE_SORT_ONLY'}
    ],
    groupList: [
        {code: 'FCT_MOVIE_TYPE', label: 'Movie Type'}
    ]
};
