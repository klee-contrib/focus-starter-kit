var utilHelper = Fmk.Helpers.utilHelper;
/**
 * Load a message by its identifier.
 * @param  {string} msgId - The message identifier.
 * @return {Promise} - The loading promise of the message.
 */
function loadMessageById(msgId){
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
function saveMessage(jsonMessage){
  if(!jsonMessage.id){
    jsonMessage.id = utilHelper.guid();
  }
  return utilHelper.loadLocalData(jsonMessage);
}

module.exports ={
  loadMessageById: loadMessageById,
  saveMessage: saveMessage
};