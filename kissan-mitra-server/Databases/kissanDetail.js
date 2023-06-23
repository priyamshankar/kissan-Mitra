require ("dotenv").config();
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");

const userDetailSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String
});

const kissanDetailModel = new mongoose.model("KissanDetail",userDetailSchema);
module.exports = kissanDetailModel;