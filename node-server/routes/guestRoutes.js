module.exports = app => {
    const guests = require("../controllers/guestController.js");

    app.post("/guests", guests.create);

    app.get("/guests", guests.getAll);

    app.get("/guests/:guestId", guests.getOne);

    app.put("/guests/:guestId", guests.updateOne);

    app.delete("/guests/:guestId", guests.deleteOne);

};