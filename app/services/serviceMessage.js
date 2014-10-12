var utilHelper = Fmk.Helpers.utilHelper;
function loadMessageById(msgId){
  var jsonMessage = {
    id: msgId,
    text: Faker.Lorem.sentence(),
    date: new Date(),
    author: Faker.Name.findName(),
    authorId: utilHelper.guid()
  };
  return utilHelper.loadLocalData(jsonMessage);
}


module.exports ={
  loadMessageById: loadMessageById
};