// libraries
import React, {PropTypes, PureComponent} from 'react';

// web components
import ScrollspyContainer from 'focus-components/scrollspy-container';
import {setHeader} from 'focus-core/application';
import ButtonBack from 'focus-components/button-back';
import {back} from 'focus-core/history';

//views
import Caracteristics from './caracteristics';
import Casting from './casting';
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Overview from './overview';
import Posters from './posters';
import Synopsis from './synospis';
import Trailer from './trailer';


const cartridgeConf = {
    barLeft: {component: ButtonBack, props: {back: back} },
    cartridge: { component: HeaderExpanded },
    summary: { component: HeaderSummary },
    actions: {
        primary: [{label: 'Imprimer', icon: 'print', action: () => { window.print(); }}],
        secondary: []
    }
};


class MovieDetailView extends PureComponent {
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
};

MovieDetailView.displayName = 'MovieDetailView';
MovieDetailView.propTypes = {
    id: PropTypes.number.isRequired
};
export default MovieDetailView;
