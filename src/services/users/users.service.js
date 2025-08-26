const { KnexService } = require('@feathersjs/knex');
const knexConfig = require('../../db/knex');
const knex = require('knex')(knexConfig);

class UsersService extends KnexService {}

module.exports = function (app) {
  const options = {
    Model: knex,
    name: 'users',
    id: 'id', 
    paginate: false
  };

  app.use('/users', new UsersService(options));
};
