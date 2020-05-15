module.exports = app => {
    const rooms = require("../controllers/roomsController.js");

    app.post("/rooms", rooms.create);

    app.get("/rooms", rooms.getAll);

    app.get("/rooms/roomsId", rooms.getOne);

    app.put("/rooms/roomsId", rooms.updateOne);

    app.delete("/rooms/roomsId", rooms.deleteOne);

};