// libraries
import React, {PropTypes} from 'react';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {ButtonBack} from 'focus-components/components';
import {back} from 'focus-core/history';
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//views
import Caracteristics from './caracteristics';
import Casting from './casting';
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Overview from './overview';
import Posters from './posters';
import Synopsis from './synospis';
import Trailer from './trailer';
import HelpCenter from '../../help-center/';

export default React.createClass({
    displayName: 'MovieDetailView',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    // propTypes: {
    //     params: PropTypes.shape.isRequired({
    //         id: PropTypes.number.isRequired
    //     })
    // }
    mixins: [cartridgeBehaviour],
    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */

    componentDidMount() {
        window.scrollTo(0, 0);
    },

    showHelpcenter() {
        const {helpFrame} = this.refs.helpCenter.refs;
        if (helpFrame.style.display === 'none') {
            helpFrame.style.display = 'inline';
        } else {
            helpFrame.style.display = 'none';
        }
    },

    cartridgeConfiguration() {
        const props = { hasLoad: false, hasForm: false }; //{id: this.props.id};
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
        actions.push({label: 'Help Center', icon: 'help_outline', action: () => {this.showHelpcenter()}});
        return actions;
    },

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                <HelpCenter ref='helpCenter' />
                {/* Bloc header dupliqué juste pour print*/}
                <div data-demo='print-page-breaker'>
                  <div data-demo='print'>
                      <HeaderExpanded hasLoad={false}/>
                  </div>
                  <div data-demo='detail-overview'>
                    <Overview hasLoad={false} hasForm={false} />
                  </div>
                  <Caracteristics id={id} />
                  <Synopsis id={id} />
                </div>
                <div data-demo='print-page-breaker'>
                  <Trailer id={id} />
                  <Posters id={id} />
                </div>
                <div data-demo='print-page-breaker'>
                  <Casting id={id} />
                </div>
            </ScrollspyContainer>
        );
    }
});
