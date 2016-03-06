import React, {Component} from 'react';
//import {setHeader} from 'focus-core/application'
import {translate} from 'focus-core/translation';
import {component as Debug} from './components';


// Page which stands for the administration
class DebugView extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {};

        // dispatch components insode the header
        /*
         setHeader({
         canDeploy: false,
         barLeft: {
         component: {}
         },
         summary: {
         // the criteria component is injected into the header in order to have a more elegant page
         component: {}
         }
         })
         */
    }

    render() {
        console.log("debug view");
        return (
            <div>
                <Debug view={this}>
                    <div>
                    debug page
                    </div>
                </Debug>
            </div>
        );
    }
}

DebugView.displayName = 'DebugView';

export default DebugView;
