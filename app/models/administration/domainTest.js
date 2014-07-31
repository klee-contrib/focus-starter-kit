var Model = Fmk.Models.Model;
var RefHelper = Fmk.Helpers.referenceHelper;

module.exports = Model.extend({
    modelName: "administration.domainTest",
    metadatas: {
        SampleMultipleReferencedId: {
            decoratorOptions: {
                query: RefHelper.getAutoCompleteServiceQuery('getAutocompleteSampleList')
            }
        }
    }
});