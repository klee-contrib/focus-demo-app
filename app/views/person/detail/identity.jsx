//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-redux/behaviours/form';
import {connect as connectToMetadata} from 'focus-redux/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-redux/behaviours/field';
import {compose} from 'redux';

//actions
import {loadIdentityAction, saveIdentityAction} from '../../../action/person';

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';

const propTypes = {
    id: PropTypes.number.isRequired
};

class PersonIdentity extends PureComponent {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }

    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel Buttons={PanelDefaultButtons({editing, toggleEdit, getUserInput, save})} title='view.person.detail.identity'>
                    {fieldFor('fullName')}
                    {fieldFor('firstName')}
                    {selectFor('sex', {entityPath: 'person', masterDatum: 'genders'})}
                    {fieldFor('birthDate')}
                    {fieldFor('birthPlace')}
                    {fieldFor('activity')}
                </Panel>
            </Form>
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
