const { findUser } = require("../helpers/findUser");


const lookupUser = (req, res) => {
    console.log("lookupUser: ", req.body);
    const user = findUser(req.body.userId);
    if (!user) return res.status(404).json({ errCode: 404, errMsg: "There isn't any such configured user in the mockUser.jsonf file" });
    console.log("lookupUser response: ", user);
    return res.status(200).json(user);
}

module.exports = { lookupUser }
