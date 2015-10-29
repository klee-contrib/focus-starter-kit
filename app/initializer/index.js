import $ from 'jquery';

$(document).on('click', 'a:not([data-bypass])', function touchHandler(evt) {
    const href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
    const root = location.protocol + '//' + location.host + '/';

    if (href.prop && href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        Backbone.history.navigate(href.attr, true);
    }
});


//Initialisation des configurations
import './domain-initializer';
import './definition-initializer';
import referenceList from './reference-list-initializer';
referenceList.initialize();
import queryStoreInitializer from './query-store-initializer';
queryStoreInitializer.initialize();
import './translation-initializer';
import './user-initializer';

//Initialisation du layout
import './layout-initializer';
