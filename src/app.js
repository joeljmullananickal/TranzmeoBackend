const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const cors = require('cors');
const usersService = require('./services/users/users.service');
require('dotenv').config();

const app = express(feathers());
app.use(cors());

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REST provider
app.configure(express.rest());

// Services
app.configure(usersService);

// Error handling
app.use(express.errorHandler());

module.exports = app;
