module.exports = app => {
    const events = require("../controllers/eventsController.js");

    app.post("/events", events.create);

    app.get("/events", events.getAll);

    app.get("/events/eventsId", events.getOne);

    app.put("/events/eventsId", events.updateOne);

    app.delete("/events/eventsId", events.deleteOne);

};