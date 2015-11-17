import fetch from 'focus-core/network/fetch';
import personUrl from '../config/server/persons';

export default {
    loadPerson(id) {
        console.log(`[PERSON] call loadPerson(${id}) method`);
        return fetch(personUrl.loadPerson({urlData: {id}}));
    },
    savePersonIdentity(data) {
        console.log(`[PERSON] call savePersonIdentity method. id=${data.id} data=${data}`);
        return fetch(personUrl.savePerson({urlData: {id: data.id}, data: {data}}));
    }
}
