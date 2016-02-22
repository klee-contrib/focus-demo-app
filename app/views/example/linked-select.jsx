//librairies
import React, {PropTypes} from 'react';

// web components
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import FilteredSelect from './component/filtered-select';
//stores & actions
import movieStore from '../../stores/movie';
import {caracteristicsActions} from '../../action/movie';

export default React.createClass({
    displayName: 'LinkedSelect',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [formPreset],
    definitionPath: 'movie',
    referenceNames: ['regions'],
    stores: [{store: movieStore, properties: ['movieCaracteristics']}],
    action: caracteristicsActions,
    _logger:  d => console.log(d),
    /** @inheritDoc */
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='movie.detail.caracteristics'>
                {this.fieldFor('title')}
                {this.fieldFor('regionCode', {listName: 'regions', onChange: d => console.log(d, this.state)})}
                {this.fieldFor('departement', {SelectComponent: FilteredSelect})}
            </Panel>
        );
    }
});
