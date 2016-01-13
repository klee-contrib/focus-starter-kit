
//import material js
import 'material-design-lite/material';

//import app demo styles
import './styles';

//Initialisation des configurations et du layout.
import initialize from './initializer';
// Démarrage de l'application
import start from './application';

initialize().then(() => {
    start();
})


//Render all application modules for the first time.
//React.render(<AlertModule />, document.querySelector('#notification-center'));

console.log('Application Focus-démo');
