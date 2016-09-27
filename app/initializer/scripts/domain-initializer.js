// import {container as domainContainer} from 'focus-core/definition/domain';
// import domainsConfig from '../../config/domains';
// import entitytDefinitionConfig from '../../config/entity-definitions';
// import difference from 'lodash/difference';
// import intersection from 'lodash/intersection';
// import uniq from 'lodash/uniq';
//
//
// export default () => {
//     console.info('|--- DOMAINS');
//     domainContainer.setAll(domainsConfig);
//
//     const arr = [];
//     for (const node in entitytDefinitionConfig) {
//         for (const sub in entitytDefinitionConfig[node]) {
//             const nodeDomain = entitytDefinitionConfig[node][sub].domain;
//             if(nodeDomain){
//                 arr.push(nodeDomain);
//             }
//         }
//     }
//     const appDomains = uniq(arr);
//     const domains = Object.keys(domainsConfig);
//
//     console.info('   |--- Declared domains :', domains);
//     console.info('   |--- Declared domains in entity defintions :', appDomains);
//
//     const intersect = intersection(appDomains, domains);
//     const diffAppDomains = difference(appDomains, intersect);
//     const diffDomains = difference(domains, intersect);
//     if(diffAppDomains.length > 0) {
//         console.warn('   |--- Missing domain\'s definition :', diffAppDomains);
//     }
//     if(diffDomains.length > 0) {
//         console.warn('   |--- Useless domain\'s definition :', diffDomains);
//     }
// }
