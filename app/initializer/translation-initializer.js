import i18n from 'i18next-client';
import traductionFiles from '../i18n';

//####################LOPEZ#########################
// TODO: remove and will be rewritten https://github.com/KleeGroup/focus-components/blob/develop/src/common/i18n/mixin/index.js
window.i18n = i18n;
//#############################################

// Initialize translations configuration.
const i18nConfig = {
    resStore: traductionFiles,
    lng: 'fr-FR'///langOpts.i18nCulture
};

//In production, fallback is english.
/*if (config.env === "production") {
_.extend(i18nConfig, {
fallbackLng: 'en-GB'
});
}*/

//Ajax culture into headers.
/*$.ajaxSetup({
headers: {
'CultureCode': culture
}
});*/

// Plugin initialization.
i18n.init(i18nConfig, () => {
    return console.log('Translation correctly initialized.');
});
