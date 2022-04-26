const knex = require('knex')({
    client: 'pg',
    connection: {
        user: process.env.DB_USER,
        port: 5432,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    },
})

module.exports = knex
