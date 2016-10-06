import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';

import get from 'lodash/get';
import identity from 'lodash/identity'

export const buildFieldForLineSearch = ({searchName, codeId, entityPath, code} ) => (state ={}, props) => {
  const {definitions, domains} = props;
  const entityDefintion = definitions[entityPath];
  const results = state[searchName].results;
  const list = results.data[0].list ? results.data[0].list  : results.data
  return {fields: Object.keys(list.find(element => element[codeId] ===props[codeId])).map(element => {
    const propertyDefinition = entityDefintion[element]
    const domain = get(domains, propertyDefinition ? propertyDefinition.domain : "", {})
    const value = list.find(element => element[codeId] ===props[codeId])[element]
    const formator = domain.formator || identity
    return {entityPath: 'movie', label: 'title', name: element,  formattedInputValue: formator(value)}}  )}
}


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
