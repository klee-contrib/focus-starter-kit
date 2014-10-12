//Dependances.
var Router = Fmk.Helpers.Router;
var application = require('../application');

/**
 * Router gêrant le module message.
 * @module  'app/router/message'
 */
module.exports = Router.extend({
  /**
   * Routes du module messgae.
   * @type {Object}
   */
  routes: {
    'message': 'messageRecherche',
    'message/:id': 'message',
    'user/:userId/message': 'userMessage',
    'user/:userId/message/:messageId': 'userMessages'
  },
  /**
   * Traitement de la route de recherche d'un message.
   * @return {[type]} [description]
   */
  messageRecherche: function messageRechercheRoute(){
    alert('NotImplemented: messageRecherche');
  },
  /**
   * Traitement de la route detail d'un message.
   * @param  {string} messageId - Identifiant d'un message.
   * @return {undefined}
   */
  message: function messageRoute(messageId){
    alert('NotImplemented: messageRecherche');
  },
  /**
   * Traitement de la route permettant l'affichage des messages d'un utilisateur.
   * @param  {string} userId    - Identifiant de l'utilisateur
   * @return {undefined}
   */
  userMessage: function userMessageRoute(userId){
    alert('NotImplemented: messageRecherche');
  },
  /**
   * Traitement de la route permettant l'affichage des messages d'un utilisateur.
   * @param  {string} userId    - Identifiant de l'utilisateur
   * @param  {string} messageId - Identifiant du message
   * @return {undefined}
   */
  userMessages: function userMessagesRoute(userId, messageId){
    alert('NotImplemented: messageRecherche');
  }

});