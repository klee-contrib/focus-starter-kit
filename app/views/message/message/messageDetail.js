//Dependencies.
var ConsultEditView = Fmk.Views.ConsultEditView;
var msgSvc = require('../../../services/serviceMessage');
/**
 * @module 'views/message/message/messageDetail'
 * @type {ConsultEditView}
 */
module.exports = ConsultEditView.extend({
  /**
   * Options de la vue.
   * @type {Object}
   */
  customOptions:{
    isModelToLoad: true,
    isSaveOnServer: true,
    isEdit: false,
    isEditMode: true
  },
  /**
   * Template de consultation de la vue.
   * @type {function}
   */
  templateConsult: require('./templates/messageConsult'),
  /**
   * Template d'edition de la vue.
   * @type {function}
   */
  templateEdit: require('./templates/messageEdit'),
  getModelSvc: msgSvc.loadMessageById
});