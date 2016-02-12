const sequelize = require('./db').sequelize;
const Movie = require('./db').Movie;
const Person = require('./db').Person;
const MoviePerson = require('./db').MoviePerson;
const movies = require('./db-movies.json');
const persons = require('./db-persons.json');

sequelize.sync()
.then(() => {
    Promise.all(Movie.bulkCreate(movies), Person.bulkCreate(persons));
})
.then(() => {
    Promise.all(movies.map(movie => MoviePerson.bulkCreate((movie.actors || []).map(actor => ({
        movieCode: movie.code,
        personCode: actor.code,
        name: actor.name,
        type: 'actor',
        role: actor.role,
        leadActor: actor.leadActor
    })).concat((movie.directors || []).map(director => ({
        movieCode: movie.code,
        personCode: director.code,
        name: director.name,
        type: 'director'
    }))).concat((movie.producers || []).map(producer => ({
        movieCode: movie.code,
        personCode: producer.code,
        name: producer.name,
        type: 'producer'
    }))).concat((movie.writers || []).map(writer => ({
        movieCode: movie.code,
        personCode: writer.code,
        name: writer.name,
        type: 'writer'
    }))))));
})
.then(() => {
    Movie.findAll({include: [Person]}).then(data => {
        const movie = data[0];
        movie.getPeople().then(console.log);
    });
})
