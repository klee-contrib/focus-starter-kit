var root = "./movies/";
var url = focus.util.url.builder;
module.exports = {
    getAll: url(root, 'GET'),
    update: url(root + "${id}/",'PUT'),
    create: url(root, 'POST'),
    get: url(root + "${id}", 'GET'),
    actors: url(root + "${id}/" + 'actors', 'GET'),
    producers: url(root + "${id}/" + 'producers', 'GET'),
    directors: url(root + "${id}/" + 'directors', 'GET'),
    movieView: url(root + "${id}/" + 'movieView', 'GET'),
    castings: url(root + "${id}/" + 'castings', 'GET')
};
