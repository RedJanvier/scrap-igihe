const knex = require('knex');

db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://RedJanvier:Jannyda1@localhost:5432/igihe'
});

module.exports = db;