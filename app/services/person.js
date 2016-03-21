import fetch from 'focus-core/network/fetch';
import personUrl from '../config/server/persons';

export default {
    loadPerson(id) {
        console.log(`[PERSON] call loadPerson(${id}) method`);
        return fetch(personUrl.load({urlData: {id}}), {isCORS: true});
    },
    loadPersonMovies(id) {
        console.log(`[PERSON] call loadPersonMovies(${id}) method`);
        return fetch(personUrl.load({urlData: {id}}), {isCORS: true}).then(({movieLinks}) => {
            return movieLinks;
        });
    },
    updatePersonBiography(data) {
        console.log(`[PERSON] call savePersonBiography method. data=${JSON.stringify(data)}`);
        return fetch(personUrl.update({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    },
    updatePersonIdentity(data) {
        console.log(`[PERSON] call savePersonIdentity method. data=${JSON.stringify(data)}`);
        return fetch(personUrl.update({urlData: {id: data.id}, data: {data}}), {isCORS: true});
    }
}
