const { log } = require('../helpers/logger');
const responses = require('../responses.json');

const transfer = (req, res) => {
    log(req.body, "Transfer", true);
    log(responses.transfer, "Transfer", false);
    return res.status(200).json(responses.transfer);
}

module.exports = { transfer }
