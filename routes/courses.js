var express = require('express');
var router = express.Router();
const pool = require("../helpers/db");
const Course = require("../models/course.model");

/* GET Courses listing.*/
router.get('/', async function (req, res, next) {
    try {
        const getCoursesResponse = await Course.findAll();
        res.send({
            "success": true,
            "message": "Courses fetched successfully",
            "response": getCoursesResponse
        })
    }
    catch (err) {
        res.send({
            "success": false,
            "message": "Courses fetch failed"
        })
        return err;
    }
});
/**
 * Create Course route
 */
router.post('/', async (req, res, next) => {
    try {
        const courseCreationResponse = await Course.create(req.body);
        if (!courseCreationResponse) {
            return res.status(400).send({
                "success": false,
                "message": "Course creation failed"
            })

        }
        return res.send({
            "success": true,
            "message": "Course created successfully"
        })
    }
    catch (err) {
        res.send({
            "success": false,
            "message": "Course creation failed"
        })
        return err;
    }
})
router.put("/:id", async (req, res, next) => {
    try {
        const courseUpdateResponse = await Course.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({
            "success": true,
            "message": "Course updated successfully"
        })
    }
    catch (err) {
        res.send({
            "success": false,
            "message": "Course update failed"
        })
        return err;
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const courseDeleteResponse = await Course.destroy({
            where: { id: req.params.id }
        });
        if (!courseDeleteResponse) {
            res.status(400).send({
                "success": false,
                "message": "Course delete failed"
            })
            return courseDeleteResponse;
        }
        res.send({
            "success": true,
            "message": "Course deleted successfully"
        })
    }
    catch (err) {
        res.status(500).send({
            "success": false,
            "message": "Course delete failed"
        })
        return err;
    }
});

module.exports = router;
