var template = require('./templates/header');
var HeaderItemsViewCustom = require('./header-items-view');
var HeaderItemsLevel0 = require('./header/headerItemsLevel0View');
var HeaderItemsLevel1 = require('./header/headerItemsLevel1View');
var HeaderItemsLevel2 = require('./header/headerItemsLevel2View');
var HeaderItemsLevel3 = require('./header/headerItemsLevel3View');
var templateBanner = require('./header/templates/banner')
//Application header view. Redefine the template.
module.exports = Fmk.Views.HeaderView.extend({
    events: _.extend({}, Fmk.Views.HeaderView.prototype.events, { "click div[data-lang]": "changeLanguage" }),
    /*template: template,
    templateBanner: templateBanner,
    ViewForLevel: {
        "level_0": HeaderItemsLevel0,
        "level_1": HeaderItemsLevel1,
        "level_2": HeaderItemsLevel2,
        "level_3": HeaderItemsLevel3
    },*/
    HeaderItemsView: HeaderItemsViewCustom,
    render: function (options) {
        Fmk.Views.HeaderView.prototype.render.call(this, options);
        var usrInfo = Fmk.Helpers.userHelper.getUserInformations();
        usrInfo.defaultCultureCodeNotEnglish = usrInfo.defaultCultureCode !== "en-GB";
        $('#Banner', this.$el).html(this.templateBanner(usrInfo));
        return this;
    },
    changeLanguage: function changeLanguage(event) {
        var lang = event.target.getAttribute('data-lang');
        console.log('lang', lang);
        Fmk.Helpers.userHelper.changeCultureInfos({ cultureCode: lang });
    }
});