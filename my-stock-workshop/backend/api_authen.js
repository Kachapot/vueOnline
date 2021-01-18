const express = require("express");
const router = express.Router();
const user = require("./models/user");

router.post("/login", (req, res)=>{
    console.log("login: " + JSON.stringify(req.body))
    res.json({result: "Login", account: req.body})

})
router.post("/register", (req, res)=>{
    console.log("register: " + JSON.stringify(req.body))
    res.json({result: "register", account: req.body})

})

module.exports = router;