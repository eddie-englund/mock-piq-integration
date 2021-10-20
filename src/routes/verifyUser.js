const responses = require('../responses.json');

const verifyUser = (req, res) => {
    console.log("VerifyUser: ", req.body);
    console.log("VerifyUser response: ", responses.verifyUser);
    return res.status(200).json(responses.verifyUser);
}

module.exports = { verifyUser }
