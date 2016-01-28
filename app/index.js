
document.addEventListener('DOMContentLoaded', () => {
    const start = require('./application');
    const initializer = require('./initializer');
    initializer.initializeAfterDOMContentLoaded().then(() => {
        start();
        console.log('Application Focus-démo started');
    });
});

import {initializeBeforeDOMContentLoaded} from './initializer';
initializeBeforeDOMContentLoaded();

//import referenceListInitializer from './initializer/reference-list-initializer';
//referenceListInitializer();

//import app demo styles
import './styles';
