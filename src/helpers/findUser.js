const users = require('../mockUsers.json');

const findUser = (userId) => {
    let data = undefined;
    users.data.forEach(user => {
        if (userId === user.userId) { 
            data = user;
            return;
        };
    })

    return data;
}

module.exports = { findUser };