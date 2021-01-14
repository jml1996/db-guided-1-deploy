const knex = require('knex'); // to make sql queries using js

const config = require('../knexfile.js'); // diff configs for diff envs

// in heroku, NODE_ENV // "production"

const env = process.env.NODE_ENV || 'development'

console.log('the env is', env)

module.exports = knex(config[env]); // choose env and call knex with right config