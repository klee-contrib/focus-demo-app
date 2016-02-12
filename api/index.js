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

/**
* Get a movie by id.
* @return {movie} the movie corresponding
*/
function _getMovieById(movieId){
    return _.find(moviesDB, (movie) => {
        return movie.code === movieId;
    });
}


function _getPerson(personId) {
    return _.find(personsDB, (person) => {
        return person.code === personId;
    });
}

function _getMovieResume(movieId) {
    const movie = _getMovieById(movieId);
    if (movie) {
        const movieResume = {
            code: movie.code,
            title: movie.title,
            poster: movie.poster,
            movieType: movie.movieType,
            productionYear: movie.productionYear,
            linked: true
        };
        return movieResume;
    }
    return null;
}

function _getMoviePeopleListByMovieId(movieId, listName) {
    const movie = _getMovieById(movieId);
    const peopleList = movie[listName];
    if(peopleList) {
        peopleList.map(people => {
            const person = _getPerson(people.code);
            people.linked = !!person;
        });
        return peopleList;
    }
    return [];
}

// GET all movies
app.get('/movies/', (req, res) => {
    res.json(moviesDB);
});

// GET MOVIE
app.get('/movies/:id', (req, res) => {
    const id = +req.params.id;
    res.json(_getMovieById(id));
});

// GET MOVIE ACTORS
app.get('/movies/:id/actors', (req, res) => {
    const id = +req.params.id;
    res.json(_getMoviePeopleListByMovieId(id, 'actors'));
});

// GET MOVIE CAMERA MEN
app.get('/movies/:id/cameramen', (req, res) => {
    const id = +req.params.id;
    res.json(_getMoviePeopleListByMovieId(id, 'camera'));
});

// GET MOVIE directors
app.get('/movies/:id/directors', (req, res) => {
    const id = +req.params.id;
    res.json(_getMoviePeopleListByMovieId(id, 'directors'));
});

// GET MOVIE producers
app.get('/movies/:id/producers', (req, res) => {
    const id = +req.params.id;
    res.json(_getMoviePeopleListByMovieId(id, 'producers'));
});

// GET MOVIE writers
app.get('/movies/:id/writers', (req, res) => {
    const id = +req.params.id;
    res.json(_getMoviePeopleListByMovieId(id, 'writers'));
});

// GET MOVIE people
app.get('/movies/:id/people', (req, res) => {
    const id = +req.params.id;
    let data = {};
    data.actors = _getMoviePeopleListByMovieId(id, 'actors');
    data.camera = _getMoviePeopleListByMovieId(id, 'camera');
    data.directors = _getMoviePeopleListByMovieId(id, 'directors');
    data.producers = _getMoviePeopleListByMovieId(id, 'producers');
    data.writers = _getMoviePeopleListByMovieId(id, 'writers');
    console.log(data);
    res.json(data);
});

// PUT MOVIE
app.put('/movies/:id', (req, res) => {
    const data = req.body.data;
    const id = +data.id;
    if(id) {
        const movie = _getMovieById(id);
        if(movie) {
            _.assign(movie, data);
            res.json(movie);
            return;
        }
        console.error('impossible de retrouver le film portant l\id :' + id);
        res.status(404).sent('Erreur : le film n\'existe pas...');
    }
    console.error('impossible de retrouver le film portant l\id :' + id);
    console.error('Erreur : aucun id de film fourni...');
    res.status(404).sent('Erreur : aucun id de film fourni...');
});

// GET all movies
app.get('/persons/', (req, res) => {
    res.json(personsDB);
});

// GET PERSON
app.get('/persons/:id', (req, res) => {
    const id = +req.params.id;
    const person = _getPerson(id);
    res.json(person);
});

// GET PERSON MOVIES
app.get('/persons/:id/movies', (req, res) => {
    const id = +req.params.id;
    const person = _getPerson(id);
    const moviesId = person.movies;
    const moviesResume = [];
    moviesId.map(movieId => {
        const movieResume = _getMovieResume(movieId);
        if(movieResume) {
            moviesResume.push(movieResume);
        }
    });
    console.log(moviesResume.length + ' movies for person ' + id);
    res.json(moviesResume);
});

// PUT PERSON
app.put('/persons/:id', (req, res) => {
    const data = req.body.data;
    const id = +data.id;
    if(id) {
        const person = _.find(personsDB, (person) => { return person.code === id });
        if(person) {
            _.assign(person, data);
            res.json(person);
            return;
        }
        console.error('impossible de retrouver la personne portant l\id :' + id);
        res.status(404).sent('Erreur : le film n\'existe pas...');
    }
    console.error('impossible de retrouver la personne portant l\id :' + id);
    console.error('Erreur : aucun id de personne fourni...');
    res.status(404).sent('Erreur : aucun id de personne fourni...');
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

// Launch the server Server
const server = app.listen(port, () => {
    const port = server.address().port;
    console.log('Mocked DEMO API listening at http://localhost:%s', port);
});
