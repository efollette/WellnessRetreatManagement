/**
 * Filename: eventRoutes.js
 * Author: Oliver Thurn
 *
 * Description: Responisble for controlling all routes for specific MVCs.
 * This does not work right now when its imported into the main index.js
 *
 * Date: May 9th, 2020
 */

module.exports = app => {
    const events = require("../controllers/eventsController.js");

    app.post("/events", events.create);

    app.get("/events", events.getAll);

    app.get("/events/eventsId", events.getOne);

    app.put("/events/eventsId", events.updateOne);

    app.delete("/events/eventsId", events.deleteOne);

};