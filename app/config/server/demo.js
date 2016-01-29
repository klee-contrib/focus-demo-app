import builder from 'focus-core/util/url/builder';

const DEMO_ROOT = './demo/';

export const loadDemoURL = builder(DEMO_ROOT + '${id}', 'GET');
