import {init} from 'focus-core/definition/formatter/number';
import 'numeral/locales/fr';


export default () => {
    console.info('|--- NUMERAL');
    // Initialise numeral conf 
    init({format: '0,0', locale: 'fr'});
    console.info('   |--- Numeral correctly initialized.');
}
