module.exports = app => {
    const bookings = require("../controllers/bookingsController.js");

    app.post("/bookings", bookings.create);

    app.get("/bookings", bookings.getAll);

    app.get("/bookings/:bookingId", bookings.getOne);

    app.put("/bookings/:bookingId", bookings.updateOne);

    app.delete("/bookings/:bookingId", bookings.deleteOne);

};