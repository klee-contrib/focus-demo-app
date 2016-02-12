const Sequelize = require('sequelize');

const sequelize = new Sequelize('focus-demo-app', '', '', {
    dialect: 'sqlite',
    storage: 'lol.db',
    logging: false
});

const Movie = sequelize.define('movie', {
    code: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    keywords: Sequelize.STRING,
    movieType: Sequelize.STRING,
    originalTitle: Sequelize.STRING,
    poster: Sequelize.STRING,
    pressRating: Sequelize.INTEGER,
    productionYear: Sequelize.INTEGER,
    runtime: Sequelize.INTEGER,
    shortSynopsis: Sequelize.TEXT,
    synopsis: Sequelize.TEXT,
    title: Sequelize.STRING,
    trailerHRef: Sequelize.STRING,
    trailerName: Sequelize.STRING,
    userRating: Sequelize.INTEGER
});

const Person = sequelize.define('person', {
    code: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fullName: Sequelize.STRING,
    firstName: Sequelize.STRING,
    biography: Sequelize.TEXT,
    shortBiography: Sequelize.TEXT,
    sex: Sequelize.STRING,
    photoURL: Sequelize.STRING,
    birthDate: Sequelize.DATE,
    birthPlace: Sequelize.STRING,
    activity: Sequelize.STRING
});

const MoviePerson = sequelize.define('moviePerson', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    movieCode: {
        type: Sequelize.STRING
    },
    personCode: {
        type: Sequelize.STRING
    },
    name: Sequelize.STRING,
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: Sequelize.STRING,
    leadActor: Sequelize.BOOLEAN
});

Movie.belongsToMany(Person, {through: {model: 'moviePerson', unique: false}, foreignKey: 'movieCode', otherKey: 'personCode', constraints: false});

module.exports = {
    sequelize,
    Movie,
    Person,
    MoviePerson
}
