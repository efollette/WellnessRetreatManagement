const db = require("./db_coms.js");

const Booking = function(booking) {
    this.start = booking.start;
    this.end = booking.end;
    this.room = booking.room;
    this.price = booking.price;
    this.guest = booking.guest;
}

Booking.createNew = (newBooking, req) => {

    db.query("INSERT INTO bookings SET ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created booking: ", { id: res.insertId, ...newBooking });
        result(null, { id: res.insertId, ...newBooking });
    });
}

Booking.getAll = result => {
    db.query("select * from bookings", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("booking: ", res);
        result(null, res);
    });
}

Booking.findById = (bookingId, res) => {
    sql.query(`SELECT * FROM bookings WHERE id = ${bookingId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found booking: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No booking with ID
        result({ kind: "not_found" }, null);
    });
}

Booking.updateById = (bookingId, booking, res) => {
    db.query(
        "UPDATE bookings SET start = ?, end = ?, room = ?, price = ?, guest = ?WHERE id = ?", [booking.start, booking.end, booking.room, booking.price, booking.guest, bookingId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No booking with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated booking: ", { id: bookingId, ...booking });
            result(null, { id: bookingId, ...booking });
        }
    );
}

Booking.remove = (bookingId, res) => {
    db.query("DELETE FROM bookings WHERE id = ?", bookingId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No Booking with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted booking with id: ", bookingId);
        result(null, res);
    });
}

Booking.removeAll = result => {
    db.query("DELETE FROM bookings", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} booking`);
        result(null, res);
    });
}

module.exports = Booking;