let referenceSvc = require('../services/reference');
referenceSvc.loadCivility().then((data)=>{
    console.log('DB-initialized', data);
});

referenceSvc.getCivility().then((d)=>{
    console.log('DATA LOADED', d);
});
