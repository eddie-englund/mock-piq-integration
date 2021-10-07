const { findUser } = require('../helpers/findUser');

const verifyUser = (req, res) => {
    console.log("VerifyUser: ", req.body);
    const user = findUser(req.body.userId);
    if (!user) return res.status(404).json({ success: false, errCode: 404, errMsg: "There isn't any such configured user in the mockUser.jsonf file" });
    console.log("VerifyUser response: ", {success: true,...user});
    return res.status(200).json({success: true,...user});
}

module.exports = { verifyUser }
