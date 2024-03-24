const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: "izaankhalid",
    password: "PostgresSQL@2024",
    host: 'localhost',
    port: 5432,
    database: "fooddistribution"
});

module.exports = pool; ``