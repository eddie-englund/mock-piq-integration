const responses = require('../responses.json');

const transfer = (req, res) => {
    console.log("transfer: ", req.body);
    console.log("Transfer response: ", responses.transfer);
    return res.status(200).json(responses.transfer);
}

module.exports = { transfer }
