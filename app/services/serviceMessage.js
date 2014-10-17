var utilHelper = Fmk.Helpers.utilHelper;
function loadMessageById(msgId){
 // var url =   url: require('../../../../config/url/message');
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