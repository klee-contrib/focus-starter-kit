let referenceSvc = require('../services/reference');
let contactSvc = require('../services/contact');
referenceSvc.loadCivility().then((data)=>{
    console.log('DB-initialized', data);
});

referenceSvc.getCivility().then((d)=>{
    console.log('DATA LOADED', d);
});

contactSvc.loadContacts().then((data)=>{
    console.log('Contacts-initialized', data);
});
