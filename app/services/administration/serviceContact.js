/* global Promise */

/** @module service/serviceContact */

// This service should be use in the Contact*Views.

//Helper dependencies.
/**
 * Helper in order to build promises from backbone models and collections.
 * @type {object}
 */
var Promisify = Fmk.Helpers.promisifyHelper;
/**
 * Helper Odata.
 * @type {object}
 */
var OdataHelper = Fmk.Helpers.odataHelper;

/*Require the original model and collections.*/
/**
 * The original Backbone.Model of administration/contact.
 * @type {object} Promise.
 */
var Contact = require('../../models/administration/contact');

/**
 * The original Backbone.Collection of administration/contact.
 * @type {object} Promise.
 */
var  ContactCollection = require('../../models/administration/contactCollection');

//Promisified  model and collections.

/**
 * The promisified Backbone.Model of administration/contact.
 * @type {object} Promise.
 */
var promiseContact = Promisify.Convert.Model(new Contact());

/**
 * The promisified Backbone.Collection of administration/contact.
 * @type {object} Promise.
 */
var promiseContactCollection = Promisify.Convert.Collection(new ContactCollection());


var URL = require('../../models/URL');

/**
 * [getContact description]
 * @param  {[type]} id
 * @return {[type]}
 */
var getContact = function getContactSvc(id){
  return promiseContact.fetchData({id: id});
};

var saveContact = function saveContactSvc(jsonContact){
  return promiseContact.saveData(jsonContact);
};


var getContactList = function getContactList(criteria, pagesInfos) {
    return promiseContactCollection.fetchData({criteria: criteria, pagesInfos: pagesInfos});
};

module.exports = {
    get: getContact,
    save: saveContact,
    search: getContactList
};
