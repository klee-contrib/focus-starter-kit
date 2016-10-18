import 'babel-preset-focus/dist/focus-polyfill';

import focusDemoConf from '../package.json';
import focusCoreConf from 'focus-core/package.json';
import focusComponentsConf from 'focus-components/package.json';
import {initialize as appConfigInitialize} from './initializer/scripts/app-configuration-initializer';
import {initialize as userInitialize } from './initializer/scripts/user-initializer';



console.info(
    `
        FOCUS DEMO
        version: ${focusDemoConf.version}
        focus-core: ${focusCoreConf.version}
        focus-components: ${focusComponentsConf.version}
        web: http://getfocus.io
    `
);

// Flag to know if DOM was loaded
document.addEventListener('DOMContentLoaded', () => { window._hasFiredDOMContentLoaded = true; });


const appInit = () => {
    // initializers before DOM CONTENT LOADED
    const beforeDomContentLoadedScript = require('./initializer/before');
    beforeDomContentLoadedScript.initialize();

    // initializers after DOM CONTENT LOADED
    const onDOMContentLoaded = () => {
        const afterDomContentLoadedScript = require('./initializer/after');
        const info = console.info;
        afterDomContentLoadedScript.initialize();
        info('#########################[START APP]############################');
        require('./application')(info);
        info('#########################[APP STARTED]##########################');
    };

    window.onDOMContentLoaded = onDOMContentLoaded;
    if (window._hasFiredDOMContentLoaded) {
        onDOMContentLoaded();
    } else {
        document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }
};
console.log('[INITIALIZER - BEFORE ANYTHING (prerequisites)]');
// Initalisation de la configuration applicative (avant tout le reste, si besoin pour autres initialisers)
// Initalisation de l'utilisateur connecté
appConfigInitialize(() => userInitialize(appInit));


//import app demo styles
import './styles';
