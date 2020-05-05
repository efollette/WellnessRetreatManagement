// like imports. all the libraties you will use
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const dotenv = require('dotenv').config();

const PORT = 5000

// dotenv.config();
console.log(`Your env is ${process.env}`); // 8626
console.log(`Your port is ${process.env.PORT}`); // 8626


// connecting to a local instance of mysql
const db_connection = mysql.createConnection({
    host: 'mysql-db',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test',
    insecureAuth: true

    // host: process.env.MYSQL_HOST,
    // port: process.env.PORT,
    // user: 'root',
    // password: process.env.MYSQL_ROOT_PASSWORD,
    // database: process.env.MYSQL_DB,
})

const SELECT_ALL_USERS_Q = 'select * from Users'

db_connection.connect(err => {
    // console.log(db_connection)
    if (err) {
        console.log('There was an error connecting')
        return err
    }
})

// console.log(db_connection)
// cross origin something --> need to look this up
const app = express()
app.use(cors())


// main route
app.get('/', (req, res) => {
    res.send('Welcome to the database')
})

// to send data use ? = &
// http://localhost:5000/users/add?username=oliver&password=notsafe
app.get('/users/add', (req, res) => {
    // should handle the query for correct parameters
    console.log(req.query)
    const { username, password } = req.query
    console.log('have data can add to database')
    const INSERT_USER_QUERY = `INSERT INTO users (username, password) VALUES('${username}', '${password}')`

    db_connection.query(INSERT_USER_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send('added data')
        }
    })
})


// returning data to the web
app.get('/users', (req, res) => {

    db_connection.query(SELECT_ALL_USERS_Q, (err, results) => {
        if (err) {
            console.log('error getting all users')
            console.log(err)
            return res.send(err)
        } else {
            console.log('sending json')
            return res.json({
                data: results
            })
        }
    })

})


// basically a rest server at this point
app.listen(PORT, () => {
    console.log(`Server is up an running on port connected ${PORT}`)
})