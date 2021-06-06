const express = require("express");
let router = express.Router();
let GameAcc = require("../../models/gameaccountsmodel")
router.get("/", async(req,res) =>{
    let acc = await GameAcc.find();
    return res.send(acc)
});
module.exports = router;
