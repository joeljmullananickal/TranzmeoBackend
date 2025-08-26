require('dotenv').config({ path: __dirname + '/../../.env' });

const knex = require('knex');

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/migrations'
  }
};
