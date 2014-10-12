module.exports = function(p) {
  return {
    name: "message",
    url: '#message',
    roles: ["DEFAULT_ROLE"],
    headers: [{
      name: "search",
      url: '#message',
      roles: ['DEFAULT_ROLE']
    }],
    pages: [{
      name: "detail",
      url: '#message/:messageId',
      roles: ['DEFAULT_ROLE']
    }]
  };
};