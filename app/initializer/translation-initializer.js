/* globals i18n */

// Initialize translations configuration.
const i18nConfig = {
    resStore: require('../i18n'),
    lng: 'en-GB'///langOpts.i18nCulture
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
