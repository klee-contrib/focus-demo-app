import builder from 'focus-application/util/url-builder';
import {apiRoot} from './index';

const commonRoot = `${apiRoot}common/`;

export default {
    /* loads */
    search: builder(commonRoot + 'search?listState.skip=${skip}&listState.top=${top}', 'POST')
};
