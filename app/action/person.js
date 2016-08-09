import personServices from '../services/person';
import actionBuilder from 'focus-core/application/action-builder';
import {actionBuilder as actionBuilder2} from 'focus-graph/actions/entity-actions-builder';

//---------- IDENTITY
const _loadIdentityAction = actionBuilder2({names: ['identity'], type:'load', service: personServices.loadPerson});
export const loadIdentityTypes = _loadIdentityAction.types;
export const loadIdentityAction = _loadIdentityAction.action;

const _saveIdentityAction = actionBuilder2({names: ['identity'], type:'save', service: personServices.updatePersonIdentity});
export const saveIdentityTypes = _saveIdentityAction.types;
export const saveIdentityAction = _saveIdentityAction.action;

//---------- BIOGRAPHY
const _loadBiographyAction = actionBuilder2({names: ['biography'], type:'load', service: personServices.loadPerson});
export const loadBiographyTypes = _loadBiographyAction.types;
export const loadBiographyAction = _loadBiographyAction.action;

const _saveBiographyAction = actionBuilder2({names: ['biography'], type:'save', service: personServices.updatePersonBiography});
export const saveBiographyTypes = _saveBiographyAction.types;
export const saveBiographyAction = _saveBiographyAction.action;

//---------- MOVIE LINKS
const _movieLinksAction = actionBuilder2({names: ['movieLink'], type:'load', service: personServices.loadPersonMovies});
export const loadMovieLinksTypes = _movieLinksAction.types;
export const loadMovieLinksAction = _movieLinksAction.action;
