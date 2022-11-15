require('dotenv').config();

 module.exports = {
  client: "postgres",
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