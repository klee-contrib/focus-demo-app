// libraries
import React, {PropTypes, PureComponent} from 'react';
import {setHeader} from 'focus-core/application';
import {back} from 'focus-core/history';

// web components
import ScrollspyContainer from 'focus-components/scrollspy-container';
import ButtonBack from 'focus-components/button-back';

//views
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Biography from './biography';
import Identity from './identity';
import Movies from './movies';
import Overview from './overview';

/**
* Related to the CartridgeBehaviour.
* Define the cartridge configuration.
*/
const cartridgeConf = {
    barLeft: {component: ButtonBack, props: {back: back} },
    cartridge: { component: HeaderExpanded },
    summary: { component: HeaderSummary },
    actions: {
        primary: [{label: 'Imprimer', icon: 'print', action: () => { window.print(); }}],
        secondary: []
    }
};

class PersonDetailView extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        setHeader(cartridgeConf);
    };
    /** @inheritDoc */
    componentDidMount() {
        window.scrollTo(0, 0);
    };

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer>
                <div data-demo='print-page-breaker'>
                    {/* Bloc header dupliqué juste pour print*/}
                    <div data-demo='print'>
                        <HeaderExpanded hasLoad={false}/>
                    </div>
                    <div data-demo='detail-overview'>
                        <Overview hasLoad={false} hasForm={false} />
                    </div>
                    <Identity id={id} />
                </div>
                <div data-demo='print-page-breaker'>
                    <Biography id={id} />
                </div>
                <Movies id={id} />
            </ScrollspyContainer>
        );
    };
};

PersonDetailView.displayName = 'PersonDetailView';
PersonDetailView.propTypes = {
    id: PropTypes.number.isRequired
};
export default PersonDetailView;
