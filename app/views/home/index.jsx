import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
//import ConnectedSearch from '../components/connected-advanced-search';
import ConnectedSearchBarComponent from '../components/connected-search-bar';
import HomeHeader from './header';
import DemoTitle from '../components/demo-title';
import {connect as connectToHeader} from 'focus-application/behaviours/header';

class Home extends PureComponent {
    render() {
        return (
            <div data-demo='home-view'>
                Bienvenue
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                bas de page
            </div>
        );
    }
};

const HomeExtended = compose(
    connectToHeader({
        actions: {primary: [{action: () => console.log('Primaire'), label: 'Primaire', icon: 'home'}], secondary: [{action: () => console.log('secondary'), label: 'Secondaire', icon: 'home'}]},
        ExpandedHeaderComponent: HomeHeader,
        SummaryHeaderComponent: HomeHeader,
        LeftHeaderComponent: DemoTitle
    })
)(Home);
export default HomeExtended;
