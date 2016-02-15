import focusDemoConf from '../package.json';
import focusCoreConf from 'focus-core/package.json';
import focusComponentsConf from 'focus-components/package.json';

console.info(
    `
        FOCUS DEMO
        version: ${focusDemoConf.version}
        focus-core: ${focusCoreConf.version}
        focus-components: ${focusComponentsConf.version}
        web: http://getfocus.io
    `
);

console.log('#########################[INIT]#######################################');
// initializers before DOM CONTENT LOADED
const beforeDomContentLoadedScript = require('./initializer/before');
beforeDomContentLoadedScript.initialize();

// initializers after DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
    const afterDomContentLoadedScript = require('./initializer/after');
    afterDomContentLoadedScript.initialize();
    console.log('#########################[START APP]############################');
    require('./application')();
    console.log('#########################[APP STARTED]##########################');
});

//import app demo styles
import './styles';
// import 'babel-polyfill/dist/polyfill';
