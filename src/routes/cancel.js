const { log } = require('../helpers/logger');
const responses = require('../responses.json');

const cancel = (req, res) => {
    log(req.body, 'Cancel', true);
    log(responses.cancel, 'Cancel', false);
    return res.status(200).json(responses.cancel);
}

module.exports = { cancel }
