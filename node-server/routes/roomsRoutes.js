/**
 * Filename: roomsRoutes.js
 * Author: Oliver Thurn
 *
 * Description: Responisble for controlling all routes for specific MVCs.
 * This does not work right now when its imported into the main index.js
 *
 * Date: May 9th, 2020
 */

module.exports = app => {
    const rooms = require("../controllers/roomsController.js");

    app.post("/rooms", rooms.create);

    app.get("/rooms", rooms.getAll);

    app.get("/rooms/roomsId", rooms.getOne);

    app.put("/rooms/roomsId", rooms.updateOne);

    app.delete("/rooms/roomsId", rooms.deleteOne);

};