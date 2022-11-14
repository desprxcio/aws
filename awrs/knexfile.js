require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {
  client: "pg",
  connection: process.env.DB_URL || process.env.DB_URL_LOCAL,
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};