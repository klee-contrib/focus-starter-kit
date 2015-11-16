import {builder} from 'focus-core/util/url';
const testRoot = API_ROOT + '/test/error/';
export const loadError = builder(testRoot, 'GET');
