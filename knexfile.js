const path = require('path')
require('dotenv').config({ path: path.resolve('/Users/bileltamouneit/Desktop/cc/aws/.env') });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {
  client: "pg",
  connection: process.env.DB_URL_LOCAL,
  pool: {
    min: 0,
    max: 15
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};