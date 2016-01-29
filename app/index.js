import {initializeAfterDOMContentLoaded, initializeBeforeDOMContentLoaded} from './initializer';

const logs = require(`../package.json`);

console.log(
    `
        FOCUS DEMO
        version: ${logs.version}
    `
);

console.log('#########################[INIT]#######################################');
// initializers before DOM CONTENT LOADED
initializeBeforeDOMContentLoaded();

// initializers after DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
    initializeAfterDOMContentLoaded();
    console.log('#########################[START APP]############################');
    require('./application')();
    console.log('#########################[APP STARTED]##########################');
});

//import app demo styles
import './styles';
