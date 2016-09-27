import React, {PropTypes} from 'react';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';
import i18next from 'i18next';

//custom components
import Picture from '../components/picture';

const PersonHeaderSummary = ({data}) => {
    const {fullName, photoURL} = data;
    return (
        <div data-demo='header-content-summary'>
            <div className="key-concept">{i18next.t('view.person.keyConcept.name')}</div>
            <Picture url={photoURL} title={fullName} />
            <h4>textFor('fullName')</h4>
        </div>
    );
};


export default compose(
    connectToStore(
        selectData('person'), // same thing : (state) => state.dataset.person
    ),
    connectToMetadata(['person']),
    connectToFieldHelpers()
)(PersonHeaderSummary);
