//librairies
import React, {PropTypes} from 'react';

// web components
import Panel from 'focus-components/panel';

const MoviePosters = () => (
    <Panel title='view.movie.detail.posters'>
        Ici les posters.
    </Panel>
);

MoviePosters.displayName = 'MoviePosters';
MoviePosters.propTypes = {
    id: PropTypes.number.isRequired
};
export default MoviePosters;
