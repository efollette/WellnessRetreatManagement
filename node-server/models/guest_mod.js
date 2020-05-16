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

const db = require("./db_com.js")

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

}

Guest.updateById = (guestId, guest, res) => {

}

Guest.remove = (id, res) => {

}

Guest.removeAll = result => {

}

module.exports = Guest;