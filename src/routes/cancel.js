const responses = require('../responses.json');

const cancel = (req, res) => {
    console.log("cancel: ", req.body);
    console.log('Cancel response', responses.transfer);
    return res.status(200).json(responses.transfer);
}

module.exports = { cancel }
