//libraries
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

//actions
import {loadSynopsisAction, saveSynopsisAction} from '../../../action/movie';

// web components
import Panel from '../../components/panel';
import Form from '../../components/form';
import PanelDefaultButtons from '../../components/panel/panel-default-buttons';

class MovieSynopsis extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    };
    /** @inheritDoc */
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel Buttons={PanelDefaultButtons({editing, toggleEdit, getUserInput, save})} title='view.movie.detail.synopsis'>
                    {fieldFor('synopsis')}
                    {fieldFor('shortSynopsis')}
                </Panel>
            </Form>
        );
    };
};

MovieSynopsis.displayName = 'MovieSynopsis';
MovieSynopsis.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movie']),
    connectToForm({
        formKey: 'movieSynopsisForm',
        entityPathArray: ['movie'],
        loadAction: loadSynopsisAction,
        saveAction: saveSynopsisAction,
        nonValidatedFields: ['movie.actors', 'movie.writers', 'movie.camera', 'movie.producers', 'movie.directors']
    }),
    connectToFieldHelpers()
)(MovieSynopsis);
