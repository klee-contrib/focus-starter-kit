//Get focus action's builder.
const actionBuilder = Focus.application.actionBuilder;
let {
    //Informations services.
    getContactInformationsById, saveContactInformations,
    //Address services.
    getContactAddressById, saveContactAddress,
    //Friends services.
    getContactFriendsById

} = require('../services/contact');
//exports all actions.
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
    },
    //All actions for address.
    address: {
        load: actionBuilder({
            service: getContactAddressById,
            node: 'address',
            status: 'loaded'
        }),
        save: actionBuilder({
            service: saveContactAddress,
            node: 'address',
            status: 'saved'
        })
    },
    //All actions for friends.
    friends: {
        load: actionBuilder({
            service: getContactFriendsById,
            node: 'friends',
            status: 'loaded'
        })
    }
};
