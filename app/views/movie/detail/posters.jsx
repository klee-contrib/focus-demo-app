//librairies
import React, {PropTypes} from 'react';

// web components
import Panel from 'focus-components/components/panel';

export default React.createClass({
    displayName: 'MoviePosters',
    propTypes: {
        id: PropTypes.number.isRequired
    },

    /** @inheritDoc */
    render() {
        return (
            <Panel title='view.movie.detail.posters' showHelp={true}>
                Ici les posters.
            </Panel>
        );
    }
});
