let URL = require('../../config/server');
let fetch = Focus.network.fetch;
let dbConnexion = require('../config/db-connexion');
const CIVILITY = 'reference/civility';

module.exports = {
    loadCivility(){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(CIVILITY).set([
                {code: 'MR', label: 'Mr'},
                {code: 'MRS', label: 'Mrs'}
             ])}, (data)=>{
                resolve(data);
             });
    },
    getCivility(){
        return new Promise((resolve, reject)=>{
            dbConnexion.child(CIVILITY).on('value', (data)=>{
                resolve(data.val());
            });
        });
    },
    getScopes(id) {
        return fetch(URL.reference.getScopes({}));
    }
};
