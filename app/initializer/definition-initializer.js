import {container as entityContainer} from 'focus-core/definition/entity';
import entitytDefinitionConfig from '../config/entity-definition';
import domainsConfig from '../config/domain';
import {difference, intersection, uniq} from 'lodash/array';

export default () => {
    console.info('##################### ENTITIES DEFINITION #########################');
    entityContainer.setEntityConfiguration(entitytDefinitionConfig);
    console.log(Object.keys(entitytDefinitionConfig));
    console.info('########################### DOMAINS ###############################');
    //Display domaines utilisés
    const arr = [];
    for (const node in entitytDefinitionConfig) {
        for (const sub in entitytDefinitionConfig[node]) {
            arr.push(entitytDefinitionConfig[node][sub].domain);
        }
    }
    const appDomains = uniq(arr);
    const domains = Object.keys(domainsConfig);

    console.info('Entity definitions domains: ', appDomains);
    console.info('Domains with a definition', domains);

    const diffAppDomains = difference(appDomains, intersection(appDomains, domains))
    const diffDomains = difference(domains, intersection(appDomains, domains))
    if(diffAppDomains.length > 0) {
        console.warn('Missing domain\'s definition', diffAppDomains);
    }
    if(diffDomains.length > 0) {
        console.warn('Useless domain\'s definition', diffDomains);
    }
    console.info('####################################################################');
}
