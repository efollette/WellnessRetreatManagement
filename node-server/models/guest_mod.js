/**
 * Filename: guest_mod.js
 * Author: Oliver Thurn
 * Description: Data model for guests
 * Date: May 9th, 2020
 */

// CREATE TABLE`guests`(
//     `id` int PRIMARY KEY AUTO_INCREMENT,
//     `first_name` varchar(255),
//     `last_name` varchar(255),
//     `email` varchar(255),
//     `status` varchar(255)
// );

const db = require("./db_coms.js");

const Guest = function(guest) {

    this.fist_name = guest.first_name;
    this.last_name = guest.last_name;
    this.email = guest.email;
    this.status = guest.status;

};

Guest.createNew = (newGuest, req) => {

    db.query("INSERT INTO guests SET ?", newGuest, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created customer: ", { id: res.insertId, ...newGuest });
        result(null, { id: res.insertId, ...newGuest });
    });

};

Guest.getAll = result => {
    db.query("select * from guests", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("guests: ", res);
        result(null, res);
    });
};

Guest.findById = (guestId, res) => {
    db.query(`SELECT * FROM guests WHERE id = ${guestId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found guest: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No guest with ID
        result({ kind: "not_found" }, null);
    });
}

Guest.updateById = (guestId, guest, res) => {
    db.query(
        "UPDATE guests SET first_name = ?, last_name = ?, email = ?, status = ?, WHERE id = ?", [guest.first_name, guest.last_name, guest.email, guest.status, guestId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No guest with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated guest: ", { id: guestId, ...guest });
            result(null, { id: guestId, ...guest });
        }
    );
}

Guest.remove = (guestId, res) => {
    db.query("DELETE FROM guests WHERE id = ?", guestId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No Guest with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted guest with id: ", guestId);
        result(null, res);
    });
}

Guest.removeAll = result => {
    db.query("DELETE FROM guests", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} guests`);
        result(null, res);
    });
}

module.exports = Guest;