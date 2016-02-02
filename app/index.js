const logs = require(`../package.json`);
console.info(
    `
        FOCUS DEMO
        version: ${logs.version}
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
