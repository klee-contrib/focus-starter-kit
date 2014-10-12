module.exports = {
    "DO_BOOLEAN": {
        "type": "boolean"
    },
    "DO_DATE": {
        "type": "text",
        "decorator": "datePicker",
        "style": "date right",
        "format": Fmk.Helpers.formaters.date
    },
    "DO_DATE_HEURE": {
        "type": "text",
        "decorator": "datePicker",
        "style": "date right",
        "format": Fmk.Helpers.formaters.dateTime
    },
    "DO_MONTANT": {
        "type": "number",
        "validation":{
            "type": "number",
            "options":{"min": 0}
        },
        "symbol": "\u20AC", // \u20AC = €
        "format": Fmk.Helpers.formaters.currency
    },
    "DO_EMAIL": {
        "type": "email",
        "validation": [{
            "type": "email"
        }]
    },
    "DO_ENTIER": {
		"type": "number",
		"validation": [{
			"type": "number"
		}]
	},
    "DO_ID": {
        "type": "text"
    },
    "DO_LISTE_MULTI": {
        "type": "text",
        "decorator": "select2"
    },
	"DO_TEXTE_50": {
	    "type": "text",
	    "validation": [{
	        "type": "string",
	        "options": {
	            "maxLength": 50
	        }
	    }],
	    "style": "texte_50"
	}
};