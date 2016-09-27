// libraries
import React from 'react';
import i18next from 'i18next';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';

//custom components
import Poster from '../components/poster';

const MovieHeaderExpanded = ({data}) => {
    const {title, poster, trailerHRef} = data;
    return (
        <div data-demo='header-content-expanded'>
            <Poster poster={poster} title={title} hasZoom={true} />
            <div data-demo='header-content-expanded__infos'>
                <div className="key-concept">{i18next.t('view.movie.keyConcept.name')}</div>
                <h3>textFor('title')</h3>
                <h5>textFor('movieType')</h5>
                <h6>textFor('productionYear')</h6>
                <div>textFor('shortSynopsis')</div>
                TODO : a terminer quand l'issue sur le textfor sera traitée.
            </div>
        </div>
    );
};

MovieHeaderExpanded.displayName = 'MovieHeaderExpanded';
export default compose(
    connectToStore(
        selectData('movie'), // same thing : (state) => state.dataset.movie
    ),
    connectToMetadata(['movie']),
    connectToFieldHelpers()
)(MovieHeaderExpanded);
