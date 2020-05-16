/**
 * Filename: index.js
 * Author: Oliver Thurn
 *
 * Description: Entry point for server
 *
 * Date: april 28th, 2020
 */


const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const dotenv = require('dotenv').config();
const guestMod = require("./models/guest_mod.js")

const events = require("./controllers/eventsController.js");
const guests = require("./controllers/guestController.js");
const rooms = require("./controllers/roomsController.js");
const user = require("./controllers/userController.js");
const bookings = require("./controllers/bookingsController.js");

const PORT = 5000

// dotenv.config();
console.log(`Your env is ${process.env}`); // 8626
console.log(`Your port is ${process.env.PORT}`); // 8626

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
});

// Events 

app.post("/events", events.create);

app.get("/events", events.getAll);

app.get("/events/eventsId", events.getOne);

app.put("/events/eventsId", events.updateOne);

app.delete("/events/eventsId", events.deleteOne);


// GUESTS
app.post("/guests", guests.create);

app.get("/guests", guests.getAll);

app.get("/guests/:guestId", guests.getOne);

app.put("/guests/:guestId", guests.updateOne);

app.delete("/guests/:guestId", guests.deleteOne);

// Rooms
app.post("/rooms", rooms.create);

app.get("/rooms", rooms.getAll);

app.get("/rooms/roomsId", rooms.getOne);

app.put("/rooms/roomsId", rooms.updateOne);

app.delete("/rooms/roomsId", rooms.deleteOne);

// users
app.post("/user", user.create);

app.get("/user", user.getAll);

app.get("/user/:guestId", user.getOne);

app.put("/user/:guestId", user.updateOne);

app.delete("/user/:guestId", user.deleteOne);

// Bookings
app.post("/bookings", bookings.create);

app.get("/bookings", bookings.getAll);

app.get("/bookings/:bookingId", bookings.getOne);

app.put("/bookings/:bookingId", bookings.updateOne);

app.delete("/bookings/:bookingId", bookings.deleteOne);

// basically a rest server at this point
app.listen(PORT, () => {
    console.log(`Server is up an running on port connected ${PORT}`)
})