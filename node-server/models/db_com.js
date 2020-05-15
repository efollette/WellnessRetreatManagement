const db = require("mysql");
const auth = require("../auth/dbconfig.js");

// connecting to a local instance of mysql
const db_connection = db.createPool({
    // host: 'mysql-db',
    // port: 3306,
    // user: 'root',
    // password: 'root',
    // database: 'dev_test',
    // insecureAuth: true

    // host: process.env.MYSQL_HOST,
    // port: process.env.PORT,
    // user: 'root',
    // password: process.env.MYSQL_ROOT_PASSWORD,
    // database: process.env.MYSQL_DB,

    host: auth.host,
    port: auth.port,
    user: auth.user,
    password: auth.password,
    database: auth.database,
    insecureAuth: auth.insecureAuth

});

module.exports = db_connection;