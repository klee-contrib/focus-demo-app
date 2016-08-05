//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {compose} from 'redux';

//actions
import {loadBiographyAction, saveBiographyAction} from '../../../action/person';

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';

const propTypes = {
    id: PropTypes.number.isRequired
};

class PersonBiography extends PureComponent {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }

    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel Buttons={PanelDefaultButtons({editing, toggleEdit, getUserInput, save})}  title='view.person.detail.biography'>
                    {fieldFor('biography')}
                    {fieldFor('shortBiography')}
                </Panel>
            </Form>
        );
    }
};
PersonBiography.displayName = 'PersonBiography';
PersonBiography.propTypes = propTypes;
export default compose(
    connectToMetadata(['person']),
    connectToForm({
        formKey: 'personBiographyForm',
        entityPathArray: ['person'],
        loadAction: loadBiographyAction,
        saveAction: saveBiographyAction
    }),
    connectToFieldHelpers()
)(PersonBiography);
