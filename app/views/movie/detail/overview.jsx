//libraries
import React, {PropTypes, PureComponent} from 'react';
import {compose} from 'redux';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {selectData} from 'focus-graph/store/create-store';

//actions
import {loadTrailerAction} from '../../../action/movie';

// web components
import Panel from 'focus-components/panel';
import Button from 'focus-components/button';
import {component as Modal} from 'focus-components/modal';
import i18next from 'i18next';

const MovieOverview = ({loading}) => {
    return (
        <Panel title='view.movie.detail.overview' data-demo='overview'>
            TODO : a réactiver quand l'issue sur le field sera traitée : https://github.com/get-focus/focus-graph/issues/62
            {/**trailerHRef &&
                <div>
                    <Button label={i18next.t('view.movie.action.watchTrailer')} type='button' handleOnClick={() => this.refs['modal-trailer'].toggleOpen()} />
                    <Modal ref='modal-trailer'>
                        <Trailer url={trailerHRef} />
                    </Modal>
                </div>
            */}
            {/**<Button label={i18next.t('view.movie.action.consult.allocine')} type='button' handleOnClick={() => window.open(url,'_blank')} />*/}
        </Panel>
    );
};

MovieOverview.displayName = 'MovieOverview';
export default compose(
    connectToStore(
        selectData('movie'), // same thing : (state) => state.dataset.person
    ),
    connectToMetadata(['movie']),
    connectToFieldHelpers()
)(MovieOverview);
