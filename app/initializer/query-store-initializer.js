import FocusCore from 'focus-core';

module.exports = {
    initialize() {
        FocusCore.dispatcher.handleServerAction({
            data: {
                scope: 'ALL'
            },
            type: 'update'
        });
    }
};
