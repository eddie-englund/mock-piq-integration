const responses = require('../responses.json');


const authorize = (req, res) => {
    console.log("authorize: ", req.body);
    console.log("Authorize response: ", responses.authorize)
    return res.status(200).json(responses.authorize);
}

module.exports = { authorize }
