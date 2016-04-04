import 'babel-preset-focus/dist/focus-polyfill';

import focusDemoConf from '../package.json';
import focusCoreConf from 'focus-core/package.json';
import focusComponentsConf from 'focus-components/package.json';
import appConfigInitializer from './initializer/scripts/app-configuration-initializer';

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
document.addEventListener('DOMContentLoaded', () => {window._hasFiredDOMContentLoaded = true;});


const appInit = () => {
	// initializers before DOM CONTENT LOADED
	const beforeDomContentLoadedScript = require('./initializer/before');
	beforeDomContentLoadedScript.initialize();

	// initializers after DOM CONTENT LOADED
	const onDOMContentLoaded = () => {
		const afterDomContentLoadedScript = require('./initializer/after');
		afterDomContentLoadedScript.initialize();
		console.log('#########################[START APP]############################');
		require('./application')();
		console.log('#########################[APP STARTED]##########################');
	};

	window.onDOMContentLoaded = onDOMContentLoaded;
	if(window._hasFiredDOMContentLoaded){
		onDOMContentLoaded();
	} else {
		document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
	}
};
console.log('#########################[INIT]#######################################');
// Initalisation de la configuration applicative (avant tout le reste, si besoin pour autres initialisers)
appConfigInitializer.initialize(appInit);

//import app demo styles
import './styles';
