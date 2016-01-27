document.addEventListener('DOMContentLoaded', () => {
    const initialize = require('./initializer');
    const start = require('./application');
    initialize().then(() => {
        start();
    });
    console.log('Application Focus-démo');
});


//import app demo styles
import './styles';
