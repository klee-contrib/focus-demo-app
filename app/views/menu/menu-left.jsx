import React from 'react';
import {navigate} from 'focus-core/history';
import Menu from 'focus-components/components/menu';
import {component as Modal} from 'focus-components/application/popin';
import {quickSearchStore} from 'focus-core/search/built-in-store';
import dispatcher from 'focus-core/dispatcher';

//custom web component
import QuickSearchView from '../search/quick';

export default React.createClass({
    displayName: 'DemoMenuLeft',
    getInitialState () {
        return {
            isQuickSearchModalOpen: false
        };
    },
    _getMenuItems() {
        return [
            { icon:'home', route: '#'}, // route: 'home'
            { icon:'search', onClick:() => { this._onQuickSearchModalToggle() }},
            { icon:'build', onClick:() => { this._onAdminClick(); } }
        ];
    },

    _onHomeClick() {
        this._onMenuItemClick();
        navigate('#', true);
    },

    _onAdminClick() {
        this._onMenuItemClick();
        navigate('#admin/masterdata', true);
        console.log('HEY THERE');
    },

    _onMenuItemClick() {
        this.setState({
            isQuickSearchModalOpen: false
        });
    },

    _onQuickSearchModalToggle() {
        const {isQuickSearchModalOpen} = this.state;
        console.log(isQuickSearchModalOpen);
        if(!isQuickSearchModalOpen) {
            const query = quickSearchStore.getQuery();
            const scope = quickSearchStore.getScope();
            console.log(query, scope);
            //dispatch in quick search store
            dispatcher.handleViewAction({
                data: {
                    query: '',
                    scope: 'ALL',
                    results: [],
                    facets: [],
                    totalCount: 0
                },
                type: 'update',
                identifier: 'QUICK_SEARCH'
            });
        }
        this.setState({
            isQuickSearchModalOpen: !isQuickSearchModalOpen
        });
    },

    render() {
        const items = this._getMenuItems();
        const {isQuickSearchModalOpen} = this.state;
        return (
            <div>
                <Menu onPopinClose={this._onQuickSearchModalToggle} items={items} handleBrandClick={this._onHomeClick} navigate={navigate}/>
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
