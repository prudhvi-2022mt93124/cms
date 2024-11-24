const jwt = require("jsonwebtoken");

let jwtSecret = process.env.JWT_SECRET;
let jwtExpireTime = process.env.JWT_EXPIRE_TIME;

exports.createJwt = async (userId, userName, roleId, roleName, name) => {
    try {
        let createToken = jwt.sign({
            _id: userId,
            userName: userName,
            roleId: roleId,
            roleName: roleName,
            name: name,
            presentTime: Date.now()
        }, jwtSecret, { expiresIn: jwtExpireTime });

        if (createToken) {
            return createToken;
        }
    }
    catch (err) {
        console.log(err, "JWT Token Generate util error");
        return err;
    }
}