import React from 'react';
import i18next from 'i18next';
import ConnectedSearchBarComponent from '../connected-search-bar';

const SearchHeader = () => (
    <div>
        <h2>{i18next.t('search.cartridge.title')}</h2>
        <ConnectedSearchBarComponent />
    </div>
);
SearchHeader.displayName = 'SearchHeader';
export default SearchHeader;
