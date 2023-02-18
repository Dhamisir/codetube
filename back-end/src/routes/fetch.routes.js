const express = require("express");
const { fetchPostController, fetchDeleteController, fetchGetController } = require("../controller/fetch.controller");
const router = express.Router();

// post Router
router.post("/", async (req, res) => {
    let data = req.body.data;
    // console.log("data", data)
    let response = await fetchPostController(data);
    res.status(response.payload.status).send(response.payload.msg);
});

// delete all entries
router.delete("/", async (req, res) => {
    let response = await fetchDeleteController();
    res.status(response.payload.status).send(response.payload.msg);
});

// get Route
router.get("/", async (req, res) => {
    const limit = 10;
    let { page = 1, gender, country } = req.query;
    // console.log(gender, !!country)

    let filter = {};
    if (gender != "undefined" && !!gender) {
        filter.gender = gender;
    }
    if (country != "undefined" && !!country) {
        filter["location.country"] = country
    }
    // console.log(filter)

    let response = await fetchGetController(filter, limit, page);
    res.status(response.payload.status).send(response.payload.msg);
});

module.exports = router;