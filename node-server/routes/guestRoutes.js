/**
 * Filename: guestRoutes.js
 * Author: Oliver Thurn
 *
 * Description: Responisble for controlling all routes for specific MVCs.
 * This does not work right now when its imported into the main index.js
 *
 * Date: May 9th, 2020
 */

module.exports = app => {
    const guests = require("../controllers/guestController.js");

    app.post("/guests", guests.create);

    app.get("/guests", guests.getAll);

    app.get("/guests/:guestId", guests.getOne);

    app.put("/guests/:guestId", guests.updateOne);

    app.delete("/guests/:guestId", guests.deleteOne);

};