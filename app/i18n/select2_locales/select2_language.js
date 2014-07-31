var configuration = {
    "fr": "./select2_locale_fr",
    "cs": "./select2_locale_cs",
    "en": "./select2_locale_en"
};
var current = "en";
module.exports = {
    setLanguage: function (lng) {
        if (lng === undefined || lng === null) {
            throw new Error('You cannot set an undefined language.');
        }
        if (configuration[lng] === undefined) {
            throw new Error('This language does not exists for the component.');
        }
        current = lng;
        require(configuration[lng]);
    }
};