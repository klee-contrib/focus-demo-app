import React from 'react';
import history from 'focus-core/history';
import LinkedSelect from './linked-select.jsx'

export default React.createClass({
    displayName: 'ExampleView',
    /** @inheritDoc */
    render() {
        return (
            <div data-role='homepage' >
                <LinkedSelect id={1} />
            </div>
        );
    }
});
