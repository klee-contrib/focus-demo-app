import React from 'react';
import i18next from 'i18next';
import ConnectedSearchBarComponent from '../components/connected-search-bar';

const HomeHeader = () => (
    <div data-demo='home-header'>
        <h1>{i18next.t('search.cartridge.title')}</h1>
        <ConnectedSearchBarComponent />
    </div>
);
HomeHeader.displayName = 'HomeHeader';
export default HomeHeader;
