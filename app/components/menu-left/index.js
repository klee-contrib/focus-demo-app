import React from 'react';

//import {navigate} from 'focus-core/history';
import Menu from 'focus-components/menu';
import {component as Modal} from 'focus-components/modal';
//import {quickSearchStore} from 'focus-core/search/built-in-store';
//import dispatcher from 'focus-core/dispatcher';
import {Link} from 'react-router';

//custom web component
//import QuickSearchView from '../search/quick';

export default React.createClass({
    displayName: 'DemoMenuLeft',
    getInitialState () {
        return {
            isQuickSearchModalOpen: false
        };
    },
    _getMenuItems() {
        return [
            { icon: 'home', label: 'menu.home', route: '/' }, // route: 'home'
            { icon: 'search', label: 'menu.search', handleOnClick: () => { /*this._onQuickSearchModalToggle()*/ }},
            { label: 'menu.test', route: '/admin/masterdata', subMenus: [
                { label: 'menu.home', route: '/' },
                { label: 'menu.home', route: '/' },
                { label: 'menu.home', route: '/' },
                { label: 'menu.home', route: '/' }
            ]},
            { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata', subMenus: [
                { icon: 'settings', label: 'menu.home', route: '/' },
                { icon: 'settings', label: 'menu.home', route: '/' },
                { icon: 'settings', label: 'menu.home', route: '/' },
                { icon: 'settings', label: 'menu.home', route: '/' }
            ]},
        ];
    },

    // _onMenuItemClick() {
    //     this.setState({
    //         isQuickSearchModalOpen: false
    //     });
    // },

    // _onQuickSearchModalToggle() {
    //     const {isQuickSearchModalOpen} = this.state;
    //     if(!isQuickSearchModalOpen) {
    //         const query = quickSearchStore.getQuery();
    //         const scope = quickSearchStore.getScope();
    //         //dispatch in quick search store
    //         dispatcher.handleViewAction({
    //             data: {
    //                 query: '',
    //                 scope: 'ALL',
    //                 results: [],
    //                 facets: [],
    //                 totalCount: 0
    //             },
    //             type: 'update',
    //             identifier: 'QUICK_SEARCH'
    //         });
    //     }
    //     this.setState({
    //         isQuickSearchModalOpen: !isQuickSearchModalOpen
    //     });
    // },

    render() {
        const items = this._getMenuItems();
        const {isQuickSearchModalOpen} = this.state;
        return (
            <div>
                <Menu menus={items} LinkComponent={Link} showLabels={true} />
                {isQuickSearchModalOpen &&
                    <div data-demo='quick-search-area'>
                        <Modal open={true} type='from-menu'>
                            <QuickSearchView handleClosePopin={this._onQuickSearchModalToggle} />
                        </Modal>
                    </div>
                }
            </div>
        );
    }
});
