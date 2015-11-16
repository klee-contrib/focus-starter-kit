import builder from 'focus-core/util/url/builder';

const personRoot = API_ROOT + '/persons/';

export default {
    loadPerson: builder(personRoot + '${id}', 'GET'),
    savePerson: builder(personRoot + '${id}', 'PUT')
};
