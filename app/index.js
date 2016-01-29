import {initializeAfterDOMContentLoaded, initializeBeforeDOMContentLoaded} from './initializer';

// initializers before DOM CONTENT LOADED
initializeBeforeDOMContentLoaded();

// initializers after DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
    initializeAfterDOMContentLoaded();
    require('./application')();
    console.log('Application Focus-démo started');
});

//import app demo styles
import './styles';
