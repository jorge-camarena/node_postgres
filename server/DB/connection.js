const { Client } = require("pg")

function connection() {
    const client = new Client({
        host: process.env.HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
      })
      return client
}

module.exports = connection