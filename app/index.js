import {initializeAfterDOMContentLoaded, initializeBeforeDOMContentLoaded} from './initializer';

initializeBeforeDOMContentLoaded();

document.addEventListener('DOMContentLoaded', () => {
    initializeAfterDOMContentLoaded().then(() => {
        require('./application')();
        console.log('Application Focus-démo started');
    });
});

//import app demo styles
import './styles';
