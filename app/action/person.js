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



export const biographyActions = {
    load: actionBuilder({
        node: 'personBiography',
        service: personSerivces.loadPerson,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'personBiography',
        service: personSerivces.updatePersonBiography,
        shouldDumpStoreOnActionCall: false,
        status: 'saved'
    })
}

export const moviesLinksActions = {
    load: actionBuilder({
        node: 'personMovieLinks',
        service: personSerivces.loadPersonMovies,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
