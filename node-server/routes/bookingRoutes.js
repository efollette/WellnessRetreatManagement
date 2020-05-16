/**
 * Filename: bookingRoutes.js
 * Author: Oliver Thurn
 * 
 * Description: Responisble for controlling all routes for specific MVCs. 
 * This does not work right now when its imported into the main index.js
 * 
 * Date: May 9th, 2020
 */

module.exports = app => {
    const bookings = require("../controllers/bookingsController.js");

    app.post("/bookings", bookings.create);

    app.get("/bookings", bookings.getAll);

    app.get("/bookings/:bookingId", bookings.getOne);

    app.put("/bookings/:bookingId", bookings.updateOne);

    app.delete("/bookings/:bookingId", bookings.deleteOne);

};