const NB_CONTACT = 3000;
const NB_FRIENDS = 30;
let contacts = {};
let {name, image, phone, lorem, address} = faker;
let {firstName, lastName, jobTitle} = name;
let {streetAddress, zipCode, city, country, latitude, longitude} = address;
let {phoneNumber} = phone;
let {avatar} = image;

for(let i=0 ; i < NB_CONTACT ; i++ ){
    let friends = [];
    for (let j = 0; j < NB_FRIENDS; j++) {
        friends.push({
            firstName: firstName(),
            lastName: lastName(),
            avatar: avatar()
        });
    }
    contacts[i] = {
            informations: {
                id: i,
                firstName: firstName(),
                lastName: lastName(),
                bio: lorem.paragraph(),
                job: jobTitle()
            },
            address: {
                line1: streetAddress(),
                zipCode: zipCode(),
                city: city(),
                country: country(),
                phone: phoneNumber(),
                latitude: latitude(),
                longitude: longitude()
            },
            friends
    };
}

let dbConnexion = require('../config/db-connexion');
const CONTACT = 'entity/contact';

module.exports = {
    /**
     * Populate the onlinedatabase wit fake contacts.
     */
    loadContacts(){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(CONTACT).set(contacts, (data)=>{
                resolve(data);
            });
        });
    },
    /**
     * Load a contact with its id.
     * @param  {string} id - Identifier of the contact.
     * @return {object}  - Load the whole contact.
     */
    getContactById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
    /**
     * Get the information node from a contact.
     * @param  {string} id - Idnetifier of the contact.
     * @return {object}    - The information prt of the contact.
     */
    getContactInformationsById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/informations`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
    /**
     * Save contact's information.
     * @param  {object} json - The json contact to save.
     * @return {object} - The complete data given back from the server.
     */
    saveContactInformations(json){
        let {id} = json;
        let rawData = _.omit(json, 'informations', 'address');
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/informations`).set(rawData, (data)=>{
                console.info('Save contact', data);
                resolve(rawData);
            });
        });
    },
    /**
     * Get the address node from a contact.
     * @param  {string} id - Idnetifier of the contact.
     * @return {object}    - The address prt of the contact.
     */
    getContactAddressById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/address`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
    /**
     * Save contact's address.
     * @param  {object} json - The json contact to save.
     * @return {object} - The complete data given back from the server.
     */
    saveContactAddress(json){
        let {id} = json;
        let rawData = _.omit(json, 'informations', 'address');
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/address`).set(rawData, (data)=>{
                console.info('Save contact', data);
                resolve(rawData);
            });
        });
    },
    /**
     * Get the friends node from a contact.
     * @param  {string} id - Idnetifier of the contact.
     * @return {array}    - The fiends of the contact.
     */
    getContactFriendsById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/friends`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
};
