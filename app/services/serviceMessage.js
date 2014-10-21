var utilHelper = Fmk.Helpers.utilHelper;
/**
 * Load a message by its identifier.
 * @param  {string} msgId - The message identifier.
 * @return {Promise} - The loading promise of the message.
 */
function loadMessageById(msgId) {
  var jsonMessage = {
    id: msgId,
    text: Faker.Lorem.sentence(),
    date: new Date().toISOString(),
    author: Faker.Name.findName(),
    authorId: utilHelper.guid(),
    type: 1
  };
  return utilHelper.loadLocalData(jsonMessage);
}
/**
 * Save a json message.
 * @param  {object} jsonMessage The json message.
 * @return {Promise}  The save promise.
 */
function saveMessage(jsonMessage) {
  if (!jsonMessage.id) {
    jsonMessage.id = utilHelper.guid();
  }
  return utilHelper.loadLocalData(jsonMessage);
}

/**
 * Load a message with the given criteria.
 * @param  {object} messageCriteria - The message criteria.
 * @return {Promise} - The promise of loading all the messages.
 */
function loadMessagesByCriteria(messageCriteria, pageInfos) {
  var messages = [];
  [0, 1, 2, 3, 4, 5, 6, 7].forEach(function(id) {
    messages.push({
      id: id,
      text: Faker.Lorem.sentence(),
      date: new Date().toISOString(),
      author: Faker.Name.findName(),
      authorId: utilHelper.guid(),
      type: 1
    });
  });
  return utilHelper.loadLocalData({
    values: messages
  });
}

module.exports = {
  loadMessageById: loadMessageById,
  saveMessage: saveMessage,
  loadMessagesByCriteria: loadMessagesByCriteria
};