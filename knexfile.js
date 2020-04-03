// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: process.env.DB,
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds',
    },
  },
};
