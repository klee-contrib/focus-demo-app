import React, {PropTypes} from 'react';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';
import {translate} from 'focus-core/translation';

//custom components
import Picture from '../components/picture';

const PersonHeaderExpanded = ({data}) => {
    const {fullName, photoURL} = data;
    return (
        <div data-demo='header-content-expanded'>
            <Picture url={photoURL} title={fullName} />
            <div data-demo='header-content-expanded__infos'>
                <div className="key-concept">{translate('view.person.keyConcept.name')}</div>
                <h3>textFor('fullName')</h3>
                <h5>textFor('activity')</h5>
                <div>textFor('shortBiography')</div>
            </div>
        </div>
    );
}

export default compose(
    connectToStore(
        selectData('person'), // same thing : (state) => state.dataset.person
    ),
    connectToMetadata(['person']),
    connectToFieldHelpers()
)(PersonHeaderExpanded);
