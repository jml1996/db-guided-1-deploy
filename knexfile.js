module.exports = {
  // for my machine
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3', // sqlite3 specific
    },
    useNullAsDefault: true, // sqlite3 specific
    migrations: { // files where we evolve database
      directory: './data/migrations',
    },
    seeds: { // mock data to populate dev db
      directory: './data/seeds',
    },
  },

  // For heroku, maybe postgres instead of sqlite
  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  },
};
