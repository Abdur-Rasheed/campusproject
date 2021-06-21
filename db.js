const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Password",
    host: "localhost",
    post: 3001,
    database: "unidb"
});

module.exports = pool;