import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import ConnectedSearch from '../components/connected-advanced-search/';
import SearchHeader from '../components/search/search-header';

const Toto = () => <div>toto</div>

class Home extends PureComponent {
    // componentWillMount() {
    //     injectBarContentSummaryHeader(Toto);
    //     injectBarContentExpandedHeader(Toto);
    // }

    render() {
        return (
            <div data-demo='home-view'>
                <SearchHeader />
                <ConnectedSearch/>
            </div>
        );
    }
};


Home.displayName = 'Home';
export default Home;
