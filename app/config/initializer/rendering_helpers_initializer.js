module.exports = {
  initialize: function(options, context) {
   
    Fmk.Helpers.postRenderingHelper.registerHelper({
      name: "datePicker",
      fn: "datepicker",
      parseFunction: "datepickerCustomParser",
      parseArgument: "getDate",
      options: {
        todayBtn: "linked",
        language: Fmk.Helpers.languageHelper.getLanguage(Fmk.Helpers.userHelper.getUserInformations().cultureCode || config.lang).bootstrapDatePickerCulture,
        autoclose: true
      }
    });
    Fmk.Helpers.postRenderingHelper.registerHelper({
      name: "select2",
      fn: "select2",
      parseFunction: "select2",
      parseArgument: "val",
      options: {
        dropdownAutoWidth: true,
        minimumInputLength: 3
      }
    });

    /*Fmk.Helpers.postRenderingHelper.registerHelper({
      name: "multiselect",
      fn: "multiselect",
      parseFunction: "val",
      options: {
        onChange: function(option, select) {
          return this.$button.data("resetText", this.options.buttonText($('option:selected', this.$select)));
        }
      }
    });*/
  }
};