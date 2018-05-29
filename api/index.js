/* eslint-disable import/unambiguous */
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const Movie = require('./db').Movie;

const MOCKED_API_PORT = process.env.API_PORT || 9999;
const API_ROOT = '/api';


const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

const swaggerDefinition = {
    info: {
        title: 'Movie API',
        version: '1.0.0',
        description: 'Small demo RESTful API with Swagger'
    },
    host: 'localhost:8080',
    basePath: '/',
    definitions: {
        Movie: {

        },
        Pagination: {

        }
    }
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./api/*.js']
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function getSwaggerSpec(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

/**
 * @swagger
 * /api/movie/{id}:
 *   get:
 *     tags:
 *       - Movies
 *     description: Returns a single movie
 *     operationId: Movies_getMovie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Movie's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single movie
 *         schema:
 *           $ref: '#/definitions/Movie'
 */
app.get(API_ROOT + '/movie/:id', function getAllNotifications(req, res) {
    Movie.find({ where: { id: req.params.id } }).then(movie => res.json(movie));
}
);

/**
 * @swagger
 * /api/movie/{id}:
 *   put:
 *     tags:
 *       - Movies
 *     description: Updates a single movie
 *     operationId: Movies_updateMovie
 *     produces: application/json
 *     parameters:
 *       - name: movie
 *         description: Movie object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Movie'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
app.put(API_ROOT + '/movie/:id', function getAllNotifications(req, res) {
    Movie.update(req.body, { where: { id: req.params.id } })
        .then(data => Movie.find({ where: { id: req.params.id } }))
        .then(movie => res.json(movie));
}
);

/**
 * @swagger
 * /api/movie:
 *   post:
 *     tags:
 *       - Movies
 *     description: Creates a new movie
 *     operationId: Movies_createMovie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: movie
 *         description: Movie object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Movie'
 *     responses:
 *       200:
 *         description: Successfully created
 */
app.post(API_ROOT + '/movie', function getAllNotifications(req, res) {
    Movie.create(req.body)
        .then(({ id }) => Movie.find({ where: { id } }))
        .then(movie => res.json(movie));
}
);

/**
 * @swagger
 * /api/movies/search:
 *   post:
 *     tags:
 *       - Movies
 *     description: Search/list movies
 *     operationId: Movies_searchMovie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: movie
 *         description: Movie object
 *         in: body
 *         required: false
 *         schema:
 *           $ref: '#/definitions/Movie'
 *       - name: pagination
 *         description: Pagination object
 *         in: query
 *         required: false
 *         schema:
 *           $ref: '#/definitions/Pagination'

 *     responses:
 *       200:
 *         description: Successfully created
 */
app.post(API_ROOT + '/movies/search', function getAllNotifications(req, res) {
    const crit = req.body && req.body.criteria ? { title: { $like: `%${req.body.criteria.title}%` } } : null;

    const limit = req.query && req.query.top && +req.query.top || 10;
    const offset = req.query && req.query.skip && +req.query.skip || 0;
    const orderBy = req.query && req.query.sortFieldName !== 'undefined' && req.query.sortFieldName !== 'null' && req.query.sortFieldName || 'id';
    const sortDesc = req.query && req.query.sortDesc && req.query.sortDesc === 'true' ? true : false;

    const query = {
        limit: limit,
        offset: offset,
        order: [[orderBy, sortDesc ? 'DESC' : 'ASC']]
    };

    if (crit) {
        query.where = crit;
    }

    Movie.findAndCountAll(query).then(data => res.json({ dataList: data.rows, totalCount: data.count }));
}
);
/**
 * @swagger
 * /api/movies:
 *   get:
 *     tags:
 *       - Movies
 *     description: Returns all movies
 *     operationId: Movies_getMovieList
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of movies
 *         schema:
 *           $ref: '#/definitions/Movie'
 */
app.get(API_ROOT + '/movies', function getAllNotifications(req, res) {
    Movie.findAll().then(movies => res.json(movies));
}
);

/**
 * @swagger
 * /api/movie/{id}:
 *   delete:
 *     tags:
 *       - Movies
 *     description: Deletes a single movie
 *     operationId: Movies_deleteMovie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Movie's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
app.delete(API_ROOT + '/movie/:id', function getAllNotifications(req, res) {
    Movie.destroy({ where: { id: req.params.id } }).then(movie => res.json(movie));
}
);

app.listen(MOCKED_API_PORT, function serverCallback() {
    console.log('Mocked entity API listening at http://localhost:%s', MOCKED_API_PORT);
}
);
