let actionBuilder = Focus.application.actionBuilder;
let contactSvc = require('../services/contact');
module.exports = {
    //All actions for informations.
    informations: {
        load: actionBuilder({
            service: contactSvc.getContactInformationsById,
            node: 'informations',
            status: 'loaded'
        })
    }
};
