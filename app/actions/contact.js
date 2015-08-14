let actionBuilder = Focus.application.actionBuilder;
let {getContactInformationsById, saveContactInformations} = require('../services/contact');
module.exports = {
    //All actions for informations.
    informations: {
        load: actionBuilder({
            service: getContactInformationsById,
            node: 'informations',
            status: 'loaded'
        }),
        save: actionBuilder({
            service: saveContactInformations,
            node: 'informations',
            status: 'saved'
        })
    }
};
