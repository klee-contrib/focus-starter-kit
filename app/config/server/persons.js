import builder from 'focus-core/util/url/builder';

const personRoot = './persons/';

export default {
    loadPerson: builder(personRoot + '${id}', 'GET'),
    loadPersonMovies: builder(personRoot + '${id}/movies', 'GET'),

    /* save */
    savePerson: builder(personRoot + '${id}', 'PUT'),

    /* search */
    searchPerson: builder(personRoot + '/search', 'POST')
};
