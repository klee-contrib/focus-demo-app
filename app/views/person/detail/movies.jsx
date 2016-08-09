//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToStore} from 'react-redux';

// web components
import Panel from 'focus-components/components/panel';
import MovieCardList from '../../movie/components/movie-card-list';

import {loadMovieLinksAction} from '../../../action/person';
import {personMovieLinksSelector} from '../../../reducer';

const propTypes = {
    id: PropTypes.number.isRequired
};

class PersonMovies extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, loadMovieLinks} = this.props;
        console.log(this.props);
        loadMovieLinks(id);
    };

    /** @inheritDoc */
    render() {
        const {movieLink} = this.props;
        console.log(this.props);
        return (
            <Panel title='view.person.detail.movies'>
                <MovieCardList movies={movieLink} />
            </Panel>
        );
    }
};

PersonMovies.displayName = 'PersonMovies';
PersonMovies.propTypes = propTypes;
export default connectToStore(
    personMovieLinksSelector,
    dispatch => ({
        loadMovieLinks: (id) => dispatch(loadMovieLinksAction(id))
    })
)(PersonMovies);
