//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

//actions
import {loadCaracteristicsAction, saveCaracteristicsAction} from '../../../action/movie';

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';

class MovieCaracteristics extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }
    /** @inheritDoc */
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel Buttons={PanelDefaultButtons({editing, toggleEdit, getUserInput, save})} title='view.movie.detail.caracteristics'>
                    {fieldFor('title')}
                    {fieldFor('originalTitle')}
                    {fieldFor('keywords')}
                    {fieldFor('runtime')}
                    {fieldFor('movieType')}
                    {fieldFor('productionYear')}
                </Panel>
            </Form>
        );
    }
};

MovieCaracteristics.displayName = 'MovieCaracteristics';
MovieCaracteristics.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movie']),
    connectToForm({
        formKey: 'movieCaracteristicsForm',
        entityPathArray: ['movie'],
        loadAction: loadCaracteristicsAction,
        saveAction: saveCaracteristicsAction,
        nonValidatedFields: ['movie.actors', 'movie.writers', 'movie.camera', 'movie.producers', 'movie.directors']
    }),
    connectToFieldHelpers()
)(MovieCaracteristics);
