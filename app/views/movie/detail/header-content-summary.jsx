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

const MovieHeaderSummary = ({data}) => {
    const {poster, title} = data;
    return (
        <div data-demo='header-content-summary'>
            <div className="key-concept">{i18next.t('view.movie.keyConcept.name')}</div>
            {poster &&
                <Poster poster={poster} title={title} />
            }
            <h4>textFor('title')</h4>
            <h5>textFor('productionYear')</h5>
        </div>
    );
};

MovieHeaderSummary.displayName = 'MovieHeaderSummary';
export default compose(
    connectToStore(
        selectData('movie'), // same thing : (state) => state.dataset.movie
    ),
    connectToMetadata(['movie']),
    connectToFieldHelpers()
)(MovieHeaderSummary);
