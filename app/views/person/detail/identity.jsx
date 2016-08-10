//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMasterData} from 'focus-graph/behaviours/master-data';
import {compose} from 'redux';

//actions
import {loadIdentityAction, saveIdentityAction} from '../../../action/person';

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';


class PersonIdentity extends PureComponent {
    componentWillMount() {
        const {id, load, loadMasterData} = this.props;
        load(id);
        loadMasterData();
    }

    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel Buttons={PanelDefaultButtons({editing, toggleEdit, getUserInput, save})} title='view.person.detail.identity'>
                    {fieldFor('fullName')}
                    {fieldFor('firstName')}
                    {selectFor('sex', {masterDatum: 'genders'})}
                    {fieldFor('birthDate')}
                    {fieldFor('birthPlace')}
                    {fieldFor('activity')}
                </Panel>
            </Form>
        );
    }
};

PersonIdentity.displayName = 'PersonIdentity';
PersonIdentity.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['person']),
    connectToMasterData(['genders']),
    connectToForm({
        formKey: 'personIdentityForm',
        entityPathArray: ['person'],
        loadAction: loadIdentityAction,
        saveAction: saveIdentityAction,
        nonValidatedFields: ['person.movieLinks']
    }),
    connectToFieldHelpers()
)(PersonIdentity);
