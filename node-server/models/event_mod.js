/**
 * Filename: event_mod.js
 * Author: Oliver Thurn
 * Description: Data model for events
 * Date: May 9th, 2020
 */

const db = require("./db_coms.js");

const Event = function(event) {

    this.start = event.start;
    this.end = event.end;
    this.price = event.price;
    this.capacity = event.capacity;
    this.guests = event.guests;
    this.description = event.description;
}

Event.createNew = (newEvent, req) => {
    db.query("INSERT INTO events SET ?", newEvent, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created event: ", { id: res.insertId, ...newEvent });
        result(null, { id: res.insertId, ...newEvent });
    });
}

Event.getAll = result => {
    db.query("select * from events", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("events: ", res);
        result(null, res);
    });
}

Event.findById = (eventId, res) => {
    db.query(`SELECT * FROM events WHERE id = ${eventId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found event: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No event with ID
        result({ kind: "not_found" }, null);
    });
}

Event.updateById = (eventId, event, res) => {
    db.query(
        "UPDATE events SET start = ?, end = ?, price = ?, capacity = ?, guest = ?, description = ? WHERE id = ?", [event.start, event.end, event.price, event.capacity, event.guest, event.description, eventId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No event with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated event: ", { id: eventId, ...event });
            result(null, { id: eventId, ...event });
        }
    );
}

Event.remove = (eventId, res) => {
    db.query("DELETE FROM events WHERE id = ?", eventId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No event with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted event with id: ", eventId);
        result(null, res);
    });
}

Event.removeAll = result => {
    db.query("DELETE FROM events", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} event`);
        result(null, res);
    });
}

module.exports = Event;