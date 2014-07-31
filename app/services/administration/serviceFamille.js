/* global Promise */

/** @module services/administration/famille */

//Helper dependencies.

/**
 * Helper in order to build promises from backbone models and collections.
 * @type {object}
 */
var Promisify = Fmk.Helpers.promisifyHelper;

/**
 * Application urls.
 * @type {objects}
 */
var URL = require('../../models/URL');


/*Require the original model and collections.*/

/**
 * The original Backbone.Model of administration/famille.
 * @type {object} Promise.
 */
var Famille = require('../../models/administration/famille');

/**
 * The original Backbone.Collection of administration/famille..
 * @type {object} Promise.
 */
var  FamilleCollection = require('../../models/administration/familleCollection');

//Promisified  model and collections.

/**
 * The promisified Backbone.Collection of administration/famille.
 * @type {object} Promise.
 */
var promiseFamille = Promisify.Convert.Model(new Famille());

/**
 * The promisified Backbone.Collection of administration/famille.
 * @type {object} Promise.
 */
var promiseFamilleCollection = Promisify.Convert.Collection(new FamilleCollection());

/**
* Perform an ajax request in order to load a **famille** by its id.
* This method will be called by the view when loading the datas.
* @param {id} id - Identifier of the model.
* @return {object} - Return a **Promise** of loading the data.
*/
var get = function getFamille(id){
  //If you want to change the default url.
  //url = URL.administration.famille;
  return promiseFamille.fetchData({id: id});
}

/**
* Perform an ajax request in order to save a **famille** given the json.
* This method will be called by the view when saving the datas.
* @param {object} jsonFamille - JSON data to save.
* @return {object} - Return a **Promise** of saving the data.
*/
var save = function saveFamille(jsonFamille){
  //If you want to change the default url.
  //url = URL.administration.famille;
  return promiseFamille.saveData(jsonFamille);
}

/**
* Perform an ajax request in order to get the list a **famille** given the json.
* @param {object} the search criteria, should be {} if no criteria.
* @param {object} the pageInfos of the search.
* @return {object} - Return a **Promise** of saving the data.
*/
var search = function searchFamille(criteria, pagesInfo){
  //If you want to change the default url.
  //url = URL.administration.famille;
  return promiseFamilleCollection.fetchData({criteria: criteria, pagesInfo: pagesInfo});
}

// TODO: add needed service functions to module.exports.
/** Exposed properties of the service modlule.*/
module.exports = {
  get: get,
  save: save,
  search: search
};
