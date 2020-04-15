import knex from 'knex';
import setup from '../../knexfile';

const db = knex(setup[process.env.NODE_ENV]);

export default db;
