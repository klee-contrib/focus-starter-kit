let referenceSvc = require('../services/reference');
let contactSvc = require('../services/contact');
function populateDB(){
    referenceSvc.loadCivility().then((data)=>{
        console.log('DB-initialized', data);
    });

    referenceSvc.getCivility().then((d)=>{
        console.log('DATA LOADED', d);
    });

    contactSvc.loadContacts().then((data)=>{
        console.log('Contacts-initialized', data);
    });
}

//populateDB();
