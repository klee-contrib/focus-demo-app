// // seearch services
// import service from '../../../../services/search';
//
// //search configurations
// import cartridgeConfiguration from './cartridge';
// import lineMapper from '../../lines/mapper';
// import onLineClick from '../../lines/line-click';
// import {scopesConfig} from '../../../../config/scopes';
// import actionBuilder from 'focus-core/search/action-builder';
//
// import searchBuiltInStore from 'focus-core/search/built-in-store';
// const advancedSearchStore = searchBuiltInStore.advancedSearchStore;
//
// export const configuration = {
//     action: actionBuilder({
//         service,
//         identifier: advancedSearchStore.identifier,
//         getSearchOptions: () => advancedSearchStore.getValue.call(advancedSearchStore) // Binding the store in the function call
//     }),
//     onLineClick,
//     isSelection: true,
//     cartridgeConfiguration,
//     lineComponentMapper: lineMapper,
//     groupMaxRows: 5, // ne fonctionne pas, n'est pas renvoyé dans la config du service search.
//     scopesConfig: scopesConfig
// };
