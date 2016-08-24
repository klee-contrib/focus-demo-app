import React, {PropTypes} from 'react';
import {translate} from 'focus-core/translation';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import MasterdataMenu from './menu';
import MasterdataHome from './home';

function getReference() {
    const path = window.location.pathname;
    const pathParams = path.split('/');
    const pageRef = pathParams[pathParams.length - 1];
    return pageRef;
}

function TitleCartridge() {
    let reference = getReference();
    const title = `view.admin.masterdata.${reference !== 'masterdata' ? reference : 'title'}`;
    if (reference === 'masterdata') {
        reference = null;
    }
    return (
        <div data-demo='masterdata-title'>
            {reference && <h6>{translate('view.admin.masterdata.title') }</h6>}
            <h3>{translate(title) }</h3>
        </div>
    );
}

function TitleSummary() {
    let reference = getReference();
    const title = `view.admin.masterdata.${reference !== 'masterdata' ? reference : 'title'}`;
    return (
        <div data-demo='masterdata-title'>
            <h4>{translate(title) }</h4>
        </div>
    );
}


export default React.createClass({
    displayName: 'MasterDataHome',
    mixins: [cartridgeBehaviour],
    propTypes: {
        reference: PropTypes.string,
        ReferenceComponent: PropTypes.func
    },
    getDefaultProps() {
        return {
            reference: null,
            ReferenceComponent: MasterdataHome
        };
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const {reference} = this.props;
        return {
            summary: {
                component: TitleSummary,
                props: { reference }
            },
            cartridge: {
                component: TitleCartridge,
                props: { reference }
            },
            actions: {
                primary: [{ label: 'Help Center', icon: 'help_outline', action: () => { window.openHelpCenter() } }],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        const {reference, ReferenceComponent} = this.props;
        const ref = this.props.routes[this.props.routes.length - 1].path;
        window.scrollTo(0, 0);
        return (
            <div data-demo='masterdata'>
                <div data-demo='masterdata--nav'>
                    <MasterdataMenu reference={ref} />
                </div>
                <div data-demo='masterdata--component'>
                    {this.props.children || <ReferenceComponent />}
                </div>
            </div>
        );
    }
});
