'use strict';

const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser')
const port = 9999;
const moviesDB = require('./db-movies.json');
const personsDB = require('./db-persons.json');
const moment = require('moment');
const args = process.argv.slice(2);
const baseDir = './';
if (args.length > 0) {
    baseDir = args[0];
}
const staticFolder = __dirname;

const app = express();
app.use(express.static(staticFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    console.log(new Date() + ', ' + req.method + ', ' + req.url);
    if (!_.isEmpty(req.body)) {
        console.log(req.body);
    }
    next();
});
//CORS middleware
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Methods', 'POST,PUT,GET,OPTIONS,DELETE');
    res.header('Content-Type', 'application/json');
    next();
}
app.use(allowCrossDomain);

// GET all movies
app.get('/movies/', (req, res) => {
    res.json(moviesDB);
});

// GET MOVIE ID.
app.get('/movies/:id', (req, res) => {
    const id = +req.params.id;
    res.json(_.find(moviesDB, (movie) => {
        return movie.code === id;
    }));

});

// PUT MOVIE ID
app.put('/movies/:id', (req, res) => {
    const data = req.body.data;
    const id = +data.id;
    if(id) {
        const movie = _.find(moviesDB, (movie) => { return movie.code === id });
        if(movie) {
            _.assign(movie, data);
            res.json(movie);
            return;
        }
        console.error('impossible de retrouver le film portant l\id :' + id);
        res.status(500).sent('Erreur : le film n\'existe pas...');
    }
    console.error('impossible de retrouver le film portant l\id :' + id);
    console.error('Erreur : aucun id de film fourni...');
    res.status(500).sent('Erreur : aucun id de film fourni...');
});
app.get('/test/error', function error(req, res) {
    res.status(422).json({
        fieldErrors: {
            telephone: [
                'Le champ telephone est obligatoire.'
            ]
        }
    });
})

// GET PERSON ID.
app.get('/persons/:id', (req, res) => {
    const id = +req.params.id;
    res.json(_.find(personsDB, (person) => {
        return person.code === id;
    }));
});

// Launch the server Server
const server = app.listen(port, () => {
    const port = server.address().port;
    console.log('Mocked NOTIFICATION API listening at http://localhost:%s', port);
});
