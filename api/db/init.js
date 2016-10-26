const sequelize =  require('./index').sequelize;
const Movie =  require('./index').Movie;

const faker = require('faker');

/** Create the database. */
const test  =  function initDb() {

  sequelize.authenticate().then(() => sequelize.sync({ force: true }).then( () => {
    if (process.env.DB_ENV !== 'prod') {
        // Populate the database with fake data
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push({
                title: faker.name.firstName(),
                originalTitle: faker.name.firstName(),
                keywords: faker.name.firstName(),
                runtime: faker.name.firstName(),
                movieType: faker.name.firstName(),
                productionYear: new Date().toISOString(),
            });
        }
        Movie.bulkCreate(data).then(() => console.log('DATA INITIALIZE'));
  }}));
}

test();
