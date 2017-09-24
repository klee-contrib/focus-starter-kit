import { init } from 'focus-core/definition/formatter/number';
import 'numeral/locales/fr';


export default () => {
    console.info('|--- NUMERAL');

    // load fr language
    // language('fr', frLanguage);
    init({});
    // console.info('   |--- Add language french');

    //define the language
    // language('fr');
    console.info('   |--- Numeral correctly initialized.');
}
