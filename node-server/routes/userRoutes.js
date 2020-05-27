/**
 * Filename: userRoutes.js
 * Author: Oliver Thurn
 *
 * Description: Responisble for controlling all routes for specific MVCs.
 * This does not work right now when its imported into the main index.js
 *
 * Date: May 9th, 2020
 */

module.exports = app => {
    const user = require("../controllers/userController.js");

    app.post("/user", user.create);

    app.get("/user", user.getAll);

    app.get("/user/:guestId", user.getOne);

    app.put("/user/:guestId", user.updateOne);

    app.delete("/user/:guestId", user.deleteOne);

    app.post("user/verify", user.verify);

    app.post('user/signUp', user.signUp);

};