//librairies
import React, {PropTypes, Component} from 'react';
import {connect as connectToForm } from 'focus-redux/behaviours/form';
import {connect as connectToMetadata} from 'focus-redux/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-redux/behaviours/field';
import {loadIdentityAction, saveIdentityAction} from '../../../action/person';

// web components
import Panel from 'focus-components/components/panel';
import {compose} from 'redux';

const propTypes = {
    id: PropTypes.number.isRequired
};

class PersonIdentity extends Component {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }

    render() {
        return (
            <Panel actions={this._renderActions} title='view.person.detail.identity'>
                {this.fieldFor('fullName')}
                {this.fieldFor('firstName')}
                {this.fieldFor('sex', {listName: 'genders'})}
                {this.fieldFor('birthDate')}
                {this.fieldFor('birthPlace')}
                {this.fieldFor('activity')}
            </Panel>
        );
    }
};

PersonIdentity.displayName = 'PersonIdentity';
PersonIdentity.propTypes = propTypes;

const formConfig = {
    formKey: 'personIdentityForm',
    entityPathArray: ['person'],
    loadAction: loadIdentityAction,
    saveAction: saveIdentityAction
};

const ConnectedPersonnIdentityForm = compose(
    connectToMetadata(['person']),
    connectToForm(formConfig),
    connectToFieldHelpers()
)(PersonIdentity);

export default ConnectedPersonnIdentityForm;
