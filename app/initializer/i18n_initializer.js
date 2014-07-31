module.exports = {
  initialize: function(options, context) {
    //Initialize the languages available in the application.
    Fmk.Helpers.languageHelper.defineLanguages(require('../i18n/languages_options'));

    //External properties.
    var config = require('../config');
    var culture = Fmk.Helpers.userHelper.getUserInformations().cultureCode || config.lang;
    var langOpts = Fmk.Helpers.languageHelper.getLanguage(culture);
    var resources = require('../i18n/all');
    

    
    //Initialize translations configuration.
    var i18nConfig = {
      resStore: resources,
      lng: langOpts.i18nCulture
    };
    
    //In production, fallback is english.
    if (config.env === "production") {
      _.extend(i18nConfig, {
        fallbackLng: 'en-GB'
      });
    }
   
    //Ajax culture into headers.
    /*$.ajaxSetup({
      headers: {
        'CultureCode': culture
      }
    });*/

    // Plugin initialization.
    i18n.init(i18nConfig, function(content) {
      return console.log('Translation correctly initialized.');
    });
    moment.lang(langOpts.momentCulture);
    numeral.language(langOpts.numeralCulture);
    require('../i18n/select2_locales/select2_language').setLanguage(langOpts.select2Culture);
  
  }
};