/**
 * Filename: rooms_mod.js
 * Author: Oliver Thurn
 * Description: Data model for Rooms
 * Date: May 9th, 2020
 */

const db = require("./db_coms.js");

const Room = function(room) {
    this.status = room.status;
    this.capacity = room.capacity;
    this.amenities = room.amenities;
    this.price = room.price;
}

Room.createNew = (newRoom, req) => {
    db.query("INSERT INTO rooms SET ?", newRoom, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created room: ", { id: res.insertId, ...newRoom });
        result(null, { id: res.insertId, ...newRoom });
    });
}

Room.getAll = result => {
    db.query("select * from rooms", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("room: ", res);
        result(null, res);
    });
}

Room.findById = (roomId, res) => {
    db.query(`SELECT * FROM rooms WHERE id = ${roomId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found room: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No room with ID
        result({ kind: "not_found" }, null);
    });
}

Room.updateById = (roomId, room, res) => {
    db.query(
        "UPDATE rooms SET status = ?, capacity = ?, amenitites = ?, price = ? WHERE id = ?", [room.status, room.capacity, room.amenities, room.price, roomId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No Rooms with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated room: ", { id: roomId, ...room });
            result(null, { id: roomId, ...room });
        }
    );
}

Room.remove = (roomId, res) => {
    db.query("DELETE FROM rooms WHERE id = ?", roomId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No room with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted booking with id: ", bookingId);
        result(null, res);
    });
}

Room.removeAll = result => {
    db.query("DELETE FROM rooms", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} rooms`);
        result(null, res);
    });
}

module.exports = Room;