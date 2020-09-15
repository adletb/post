const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "post",
    host: "localhost",
    port: 5432,
    database: "post_db" 
})

module.exports = pool;