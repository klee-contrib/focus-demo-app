import React, {PropTypes} from 'react';

function getDisplayName(comp) {
    if ((comp.constructor) && (comp.constructor.displayName)) {
        return comp.constructor.displayName;
    } else {
        return "";
    }
}

function _logDebugInfos(view, inspect) {

    let displayName="";
    if (view) {
        displayName = getDisplayName(view);
    }

    console.log(`################ Debug ${displayName}  ###############`);
    if (view) {
        console.log('displayName: ', displayName);
        console.log('definitionPath: ', view.definitionPath);
        console.log('definition: ', view.definition);

        if (view.props) {
            console.log('**** props ****');
            console.log('props: ', view.props);
            console.log('data: ', view.props.data);
            console.log('store: ', view.props.store);
        } else {
            console.log('props: ', undefined);
        }
        if (view.state) {
            console.log('**** state ****');
            console.log('state: ', view.state);
            console.log('isEdit: ', view.state.isEdit);

        } else {
            console.log('state: ', undefined);
        }

    } else {
        console.log('props view is not defined!!');
    }
    if (inspect) {
        console.log(getDisplayName(inspect), inspect);
    }
    console.log('#######################################');

}

function checkService(serviceCall, params) {
    serviceCall.apply(undefined, params).then(
        function (valeur) {
            console.log("checkService",valeur);//"Succès"
        },
        function (valeur) {
            console.log("checkService",valeur);//"Succès"
        });
}

const component = React.createClass({
    displayName: 'debug',

    render()
    {
        console.log("comp", this.props.comp);
        const {view,inspect} = this.props;
        _logDebugInfos(view, inspect);
        let comp = this.props.comp || {cType: 'div'};
        let cType = comp.cType;
        let root = React.createElement(cType, {className: 'debug'}, this.props.children);
        return root;
    }
});

const mixin = {
    logDebugInfos(inspect) {
        _logDebugInfos(this, inspect);
    },
    checkService(serviceCall, params) {
       _checkService(serviceCall, params);
    }
};

export default {
    component,
    mixin
};
