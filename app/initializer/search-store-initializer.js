import dispatcher from 'focus-core/dispatcher';
import {advancedSearchStore} from 'focus-core/search/built-in-store';

export default () => {
    dispatcher.handleViewAction({
        data: {
            query: '',
            scope: 'ALL'
        },
        type: 'update',
        identifier: advancedSearchStore.identifier
    });
}
