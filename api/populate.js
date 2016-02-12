const Promise = require('bluebird');
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
    const roles = ['actor', 'director', 'producer', 'writer'];
    return Promise.resolve(roles.reduce((roleAcc, role) => {
        return roleAcc.concat(movies.reduce((movieAcc, movie) => {
            if (!movie[`${role}s`]) return movieAcc;
            return movieAcc.concat(movie[`${role}s`].map(person => ({
                movieCode: movie.code,
                personCode: person.code,
                name: person.name,
                type: role,
                role: person.role,
                leadActor: person.leadActor
            })));
        }, []));
    }, []));
})
.then(persons => {
    const bulks = [];
    const bulkSize = 5000;
    const bulkCount = Math.ceil(persons.length / bulkSize);
    for (var i = 0; i < bulkCount; i++) {
        bulks.push({start: bulkSize * i, end: bulkSize * (i + 1)});
    }
    return Promise.each(bulks, (bulk, index) => {
        MoviePerson.bulkCreate(persons.slice(bulk.start, bulk.end));
    });
})
.then(() => {
    Movie.find({where: {code: 1791}, include: [Person]}).then(movie => {
        movie.getPeople().then(people => console.log(people.map(person => person.get({plain: true}))));
    });
})
