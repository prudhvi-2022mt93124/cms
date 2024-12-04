var express = require('express');
var router = express.Router();
const User = require("../models/users.model");
const bcrypt = require("bcryptjs");
const createJwt = require("../helpers/auth");
/* GET home page. */
router.post('/login', async function (req, res, next) {
    try {
        const body = req.body;
        const getUserResponse = await User.findOne({ where: { email: body.email }, });
        console.log("get User", getUserResponse);
        if (!getUserResponse) {
            res.status(400).send({
                message: "No user found",
                status: 400,
                success: false,
            });
            return getUserResponse;
        }
        const checkPassword = bcrypt.compareSync(body.password, getUserResponse.dataValues.password);
        if (!checkPassword) {
            res.status(400).send({
                message: "Password not matched.",
                status: 400,
                success: false,
            });
            return checkPassword;
        }
        let token = await createJwt.createJwt(getUserResponse.dataValues.id, getUserResponse.dataValues.eMail, getUserResponse.dataValues.roleId, getUserResponse.dataValues.roleName, getUserResponse.dataValues.name);
        return res.status(200).send({
            success: true,
            message: "User Login successfully",
            token: token,
            data: {
                _id: getUserResponse.dataValues.id,
                name: getUserResponse.dataValues.name,
                eMail: getUserResponse.dataValues.eMail,
                roleId: getUserResponse.dataValues.roleId,
                roleName: getUserResponse.dataValues.roleName,
            }
        })
    }
    catch (err) {
        console.log(err, "Login Error =====");
        return err;
    }
});

module.exports = router;
