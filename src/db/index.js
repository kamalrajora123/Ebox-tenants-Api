const Sequelize = require('sequelize');
const glob = require('glob');

const env = process.env.NODE_ENV || 'development';

const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //console.log(config.database);
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//glob.sync(`${__dirname} + /../**/*.model.js`)
glob.sync(`${__dirname} + /../**/*.model.js`)
  .forEach((file) => {    
    // console.log(file);
    const model = sequelize.import(file);
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}); 

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
