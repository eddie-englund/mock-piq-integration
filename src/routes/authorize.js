const { log } = require('../helpers/logger');
const responses = require('../responses.json');


const authorize = (req, res) => {
    log(req.body, "Authorize", true);
    log(responses.authorize, "Authorize", false);
    return res.status(200).json(responses.authorize);
}

module.exports = { authorize }
