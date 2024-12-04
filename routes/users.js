var express = require('express');
var router = express.Router();
const User = require("../models/users.model");
const bcrypt = require("bcryptjs");
const saltRounds = process.env.SALTROUNDS;


/* GET users listing.*/
router.get("/", async function (req, res, next) {
  try {
    const getUserResponse = await User.findAll();
    res.send({
      "success": true,
      "message": "Users fetched successfully",
      "response": getUserResponse
    })
  }
  catch (err) {
    res.send({
      "success": false,
      "message": "Users fetch failed"
    })
    return err;
  }
});
/**
 * Create User route
 */
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body, "=================");
    const postBody = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, parseInt(saltRounds)),
      phoneNumber: req.body.phoneNumber
    };
    if (req.body.isAdminUser === true) {
      postBody["roleId"] = "1";
      postBody["roleName"] = "admin";

    }
    const userCreationResponse = await User.create(postBody);
    // console.log("===", userCreationResponse);
    res.send({
      "success": true,
      "message": "User created successfully"
    })
  }
  catch (err) {
    console.log("error", err);
    res.send({
      "success": false,
      "message": "User creation failed"
    })
    return err;
  }
})
router.put("/:id", async (req, res, next) => {
  try {
    const userUpdateResponse = await User.update(req.body, {
      where: { id: req.params.id }
    });
    res.send({
      "success": true,
      "message": "User updated successfully"
    })
  }
  catch (err) {
    res.send({
      "success": false,
      "message": "User update failed"
    })
    return err;
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userDeleteResponse = await User.destroy({
      where: { id: req.params.id }
    });
    if (!userDeleteResponse) {
      res.status(400).send({
        "success": false,
        "message": "User delete failed"
      })
      return userDeleteResponse;
    }
    res.send({
      "success": true,
      "message": "User deleted successfully"
    })
  }
  catch (err) {
    res.status(500).send({
      "success": false,
      "message": "User delete failed"
    })
    return err;
  }
});
module.exports = router;
