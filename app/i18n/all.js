/* global _, Fmk*/
//FileName: all.js
// French container.
//Todo: create a js fun

/*Recreate the french informations as a js object.*/
var french = Fmk.Helpers.utilHelper.combine(require("./generated/fr-FR.generated"), require("./fr-FR"));

module.exports = {
    en: {
        translation: {
            'key': 'value'
        }
    },
    "fr-FR": {
        "translation": french
    }
};