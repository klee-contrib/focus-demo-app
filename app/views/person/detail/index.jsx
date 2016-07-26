// libraries
import React, {PropTypes} from 'react';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {ButtonBack} from 'focus-components/components';
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import {back} from 'focus-core/history';

//views
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Biography from './biography';
import Identity from './identity';
import Movies from './movies';
import Overview from './overview';

export default React.createClass({
    displayName: 'PersonDetailView',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [cartridgeBehaviour],

    /** @inheritDoc */
    componentWillMount() {
        this._registerCartridge();
    },

    componentDidMount() {
        window.scrollTo(0, 0);
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = { hasLoad: false }; //{id: this.props.id};
        return {
            barLeft: {component: ButtonBack, props: {back: back} },
            cartridge: { component: HeaderExpanded, props },
            summary: { component: HeaderSummary, props },
            actions: {
                primary: this._getGlobalPrimaryActions() || [],
                secondary: []
            }
        };
    },

    _getGlobalPrimaryActions() {
        const actions = [];
        actions.push({label: 'Imprimer', icon: 'print', action: () => {
            window.print();
        }});
        return actions;
    },

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
    }
});
