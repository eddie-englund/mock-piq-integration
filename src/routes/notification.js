const { findUser } = require("../helpers/findUser");
const { log } = require("../helpers/logger");
const responses = require('../responses.json');


const notification = (req, res) => {
    console.log("Notification: ", req.body);
    log(req.body, "Notification", true);
   
    return res.status(200).json(responses.notification);
}

module.exports = { notification }
