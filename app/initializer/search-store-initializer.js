import FocusCore,{dispatcher} from 'focus-core';

export default () => {
    dispatcher.handleViewAction({
        data: {
            query: '',
            scope: 'ALL'
        },
        type: 'update',
        identifier: FocusCore.search.builtInStore.advancedSearchStore.identifier
    });
}
