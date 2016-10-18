const Sequelize = require('sequelize');


const sequelizeInstance =
    new Sequelize('movies', null, null, {
        dialect: 'sqlite',
        storage:  './db-tests.sqlite',
        port: 3306,
        logging: false
    });


const movie = sequelizeInstance.define('Movie',
    {
        title: Sequelize.STRING,
        originalTitle: Sequelize.STRING,
        keywords: Sequelize.STRING,
        runtime: Sequelize.STRING,
        movieType: Sequelize.STRING,
        productionYear: Sequelize.DATE,
    }
);


// article.belongsToMany(section, {through: articleSection});
// section.belongsToMany(article, {through: articleSection});

/** ORM instance. */
// export const sequelize = sequelizeInstance;
//
// /** Movie definition, used to query the database. */
// export const Movie = movie;

module.exports = {
  Movie: movie,
  sequelize:sequelizeInstance
}
