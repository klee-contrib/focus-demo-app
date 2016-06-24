import React, {PropTypes} from 'react';
import {translate} from 'focus-core/translation';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import MasterdataMenu from './menu';
import MasterdataHome from './home';
import {DraggableIframe} from 'focus-components/components';

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
        ReferenceComponent: PropTypes.func,
        helpCenterShowed: PropTypes.bool
    },
    getDefaultProps() {
        return {
            reference: null,
            ReferenceComponent: MasterdataHome,
            helpCenterShowed: false
        };
    },

    getInitialState() {
        return {
            helpCenterShowed: false
        }
    },

    showHelpcenter() {
        const {helpCenterShowed} = this.state;
        this.setState({ helpCenterShowed: !helpCenterShowed });
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
                primary: [{ label: 'Help Center', icon: 'help_outline', action: () => { this.showHelpcenter() } }],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        const {reference, ReferenceComponent} = this.props;
        const ref = this.props.routes[this.props.routes.length - 1].path;
        const {helpCenterShowed} = this.state;
        window.scrollTo(0, 0);
        return (
            <div data-demo='masterdata'>
                <div data-demo='masterdata--nav'>
                    {helpCenterShowed ? 
                        <DraggableIframe
                            width={350}
                            height={550}
                            iframeUrl='http://localhost:1234/extension.html'
                            title='view.help-center.title'
                            requestClose={this.showHelpcenter}
                        /> 
                    : <div />}
                    <MasterdataMenu reference={ref} />
                </div>
                <div data-demo='masterdata--component'>
                    {this.props.children || <ReferenceComponent />}
                </div>
            </div>
        );
    }
});
