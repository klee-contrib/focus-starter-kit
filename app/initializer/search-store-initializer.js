import FocusCore,{dispatcher} from 'focus-core';

export default {
    initialize() {
        dispatcher.handleServerAction({
            data: {
                scope: 'ALL'
            },
            type: 'update'
        });
    }
};


export default {
    initialize() {
        dispatcher.handleViewAction({
            data: {
                query: '',
                scope: 'ALL'
            },
            type: 'update',
            identifier: FocusCore.search.builtInStore.advancedSearchStore.identifier
        });
        // dispatcher.handleViewAction({
        //     data: {
        //         query: '',
        //         scope: 'ALL'
        //     },
        //     type: 'update',
        //     identifier: FocusCore.search.builtInStore.quickSearchStore.identifier
        // });
    }
};
