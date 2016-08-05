import personServices from '../services/person';
import actionBuilder from 'focus-core/application/action-builder';
import {actionBuilder as actionBuilder2} from 'focus-graph/actions/entity-actions-builder';

// IDENTITY
const _loadIdentityAction = actionBuilder2({names: ['person'], type:'load', service: personServices.loadPerson});
export const loadIdentityTypes = _loadIdentityAction.types;
export const loadIdentityAction = _loadIdentityAction.action;

const _saveIdentityAction = actionBuilder2({names: ['person'], type:'save', service: personServices.updatePersonIdentity});
export const saveIdentityTypes = _saveIdentityAction.types;
export const saveIdentityAction = _saveIdentityAction.action;

const _loadBiographyAction = actionBuilder2({names: ['person'], type:'load', service: personServices.loadPerson});
export const loadBiographyTypes = _loadBiographyAction.types;
export const loadBiographyAction = _loadBiographyAction.action;

const _saveBiographyAction = actionBuilder2({names: ['person'], type:'save', service: personServices.updatePersonBiography});
export const saveBiographyTypes = _saveBiographyAction.types;
export const saveBiographyAction = _saveBiographyAction.action;


export const moviesLinksActions = {
    load: actionBuilder({
        node: 'personMovieLinks',
        service: personServices.loadPersonMovies,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
