const { v4: uuid } = require('uuid');
const { findUser } = require('../helpers/findUser');

const authorize = (req, res) => {
    console.log("authorize: ", req.body);
    const user = findUser(req.body.userId);
    if (!user) return res.status(404).json({ errCode: 404, errMsg: "There isn't any such configured user in the mockUser.jsonf file" });
    const txId = uuid();
    console.log("Authorize response: ", { userId: user.userId, success: true, merchantTxId: txId })
    return res.status(200).json({ userId: user.userId, success: true, merchantTxId: txId });
}

module.exports = { authorize }
