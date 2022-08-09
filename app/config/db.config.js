
const Sequelize = require('sequelize');
const env = require('./env')


const sequelize = new Sequelize(env.database, env.username, env.password,
  {
    host: env.host,
    port: env.port,
    dialect: env.dialect,
    logging: false,
    define: { underscored: true, },

    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;


db.product = require("../models/product.model")(sequelize, Sequelize);
db.category = require("../models/category.model")(sequelize, Sequelize);

db.product.belongsTo(db.category, {
  foreignKey: 'cat_id', onDelete: "CASCADE",
  onUpdate: "CASCADE",
});



