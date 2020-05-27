/**
 * Filename: db_com.js
 * Author: Oliver Thurn
 * Description: Basic instance of mysql db connection. Provides a pool connection
 * can be modified to fit more specific needs
 * Date: May 9th, 2020
 */

const db = require("mysql");
const auth = require("../auth/dbconfig.js");

// connecting to a local instance of mysql
const db_connection = db.createPool({

    host: auth.host,
    port: auth.port,
    user: auth.user,
    password: auth.password,
    database: auth.database,
    insecureAuth: auth.insecureAuth
});

module.exports = db_connection;