const { log } = require('../helpers/logger');
const responses = require('../responses.json');

const verifyUser = (req, res) => {
    log(req.body, 'VerifyUser', true);
    log(responses.verifyUser, 'VerifyUser', false);
    return res.status(200).json(responses.verifyUser);
}

module.exports = { verifyUser }
