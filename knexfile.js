require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {
  client: "pg",
  connection: process.env.DB_URL_LOCAL,
  searchPath: 'public',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};