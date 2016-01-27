document.addEventListener('DOMContentLoaded', () => {
    const initializer = require('./initializer');
    const start = require('./application');
    initializer.initialize().then(() => {
        start();
        console.log('Application Focus-démo started');
    });
});

console.log('IMPORT reference lists initializer');
import referenceList from './initializer/reference-list-initializer';
console.log('INIT reference lists');
referenceList.initialize();

//import app demo styles
import './styles';
