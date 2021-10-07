const { findUser } = require("../helpers/findUser");


const transfer = (req, res) => {
    console.log("transfer: ", req.body);
    const user = findUser(req.body.userId);
    if (!user) return res.status(404).json({ errCode: 404, errMsg: "There isn't any such configured user in the mockUser.jsonf file" });
    console.log("Transfer response: ", { userId: user.userId, success: true});
    return res.status(200).json({ userId: user.userId, success: true });
}

module.exports = { transfer }
