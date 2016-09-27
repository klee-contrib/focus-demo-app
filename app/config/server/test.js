import builder from 'focus-application/util/url-builder';

const testRoot = './test/error/';

export default {
    loadError: builder(testRoot, 'GET')
};
