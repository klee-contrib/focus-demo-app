import React, {PropTypes} from 'react';
import {connect as connectToStore} from 'react-redux';
import {selectData} from 'focus-graph/store/create-store';
import {translate} from 'focus-core/translation';

// components
import Panel from 'focus-components/panel';
import Button from 'focus-components/button';

//pourcentage de completude<br/>
// nombre de films<br/>
// nombre de réalisations<br/>
const PersonOverview = ({data}) => {
    const {code} = data;
    const url = `http://www.allocine.fr/personne/fichepersonne_gen_cpersonne=${code}.html`;
    return (
        <Panel title='view.person.detail.overview' data-demo='overview'>
            <Button label={translate('view.person.action.consult.allocine')} type='button' handleOnClick={() => window.open(url,'_blank')} />
        </Panel>
    );
};

PersonOverview.displayName = 'PersonOverview';
export default connectToStore(
    selectData('person') // same thing : (state) => state.dataset.person
)(PersonOverview);
