module.exports = app => {
    const user = require("../controllers/userController.js");

    app.post("/user", user.create);

    app.get("/user", user.getAll);

    app.get("/user/:guestId", user.getOne);

    app.put("/user/:guestId", user.updateOne);

    app.delete("/user/:guestId", user.deleteOne);

};