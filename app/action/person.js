import personSerivces from '../services/person';
import actionBuilder from 'focus-core/application/action-builder';
import {actionBuilder as actionBuilder2} from 'focus-redux/actions/entity-actions-builder';

// IDENTITY
const _loadIdentityAction = actionBuilder2({names: ['person'], type:'load', service: personSerivces.loadPerson});
export const loadIdentityTypes = _loadIdentityAction.types;
export const loadIdentityAction = _loadIdentityAction.action;

const _saveIdentityAction = actionBuilder2({names: ['person'], type:'save', service: personSerivces.updatePersonIdentity});
export const saveIdentityTypes = _saveIdentityAction.types;
export const saveIdentityAction = _saveIdentityAction.action;

const _loadBiographyAction = actionBuilder2({names: ['person'], type:'load', service: personSerivces.loadPerson});
export const loadBiographyTypes = _loadBiographyAction.types;
export const loadBiographyAction = _loadBiographyAction.action;

const _saveBiographyAction = actionBuilder2({names: ['person'], type:'save', service: personSerivces.updatePersonBiography});
export const saveBiographyTypes = _saveBiographyAction.types;
export const saveBiographyAction = _saveBiographyAction.action;


export const moviesLinksActions = {
    load: actionBuilder({
        node: 'personMovieLinks',
        service: personSerivces.loadPersonMovies,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
