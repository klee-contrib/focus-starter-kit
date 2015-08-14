const NB_CONTACT = 3000;
let contacts = {};
let {name, phone, lorem} = faker;
let {firstName, lastName, jobTitle} = name;
for(let i=0 ; i < NB_CONTACT ; i++ ){
    let id = i;
    contacts[id] = {
            informations: {
                id: id,
                firstName: firstName(),
                lastName: lastName(),
                bio: lorem.paragraph(),
                job: jobTitle()
        }
    };
}

let URL = require('../../config/server');
let fetch = Focus.network.fetch;
let dbConnexion = require('../config/db-connexion');
const CONTACT = 'entity/contact';

module.exports = {
    loadContacts(){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(CONTACT).set(contacts, (data)=>{
                resolve(data);
            });
        });
    },
    getContactById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
    getContactInformationsById(id){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(`${CONTACT}/${id}/informations`).on('value', (data)=>{
                resolve(data.val());
            });
        });
    }
};
