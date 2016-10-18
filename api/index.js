"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const Movie = require('./db').Movie;

const MOCKED_API_PORT = process.env.API_PORT || 9999;
const API_ROOT = '/api';


const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Allow CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.get(API_ROOT  + '/movie/:id', function getAllNotifications(req, res) {
    Movie.find({ where: { id: req.params.id} }).then(movie => res.json(movie));
  }
);


app.put(API_ROOT  + '/movie/:id', function getAllNotifications(req, res) {
    Movie.update(req.body,{  where: { id: req.params.id} }).then(movie => res.json(movie));
  }
);


app.post(API_ROOT  + '/movie', function getAllNotifications(req, res) {
    Movie.create(req.body).then(movie => res.json(movie));
  }
);

app.get(API_ROOT  + '/movies', function getAllNotifications(req, res) {
    Movie.findAll().then(movies => res.json(movies));
  }
);

app.delete(API_ROOT  + '/movie/:id', function getAllNotifications(req, res) {
    Movie.destroy({ where: { id: req.params.id} }).then(movie => res.json(movie));
  }
);

const server = app.listen(MOCKED_API_PORT, function serverCallback() {
    console.log('Mocked entity API listening at http://localhost:%s', MOCKED_API_PORT);
  }
);
