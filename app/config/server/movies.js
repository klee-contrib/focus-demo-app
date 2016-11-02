import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const movieRoot = `${apiRoot}movies/`;

export default {
    create: builder(movieRoot, 'POST'),
    load: builder(movieRoot + '${id}', 'GET'),
    search: builder(movieRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}', 'POST'),
    searchSort: builder(movieRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}&listState.sortFieldName=${sortFieldName}', 'POST'),
    update: builder(movieRoot + '${id}', 'PUT')
};
