const express = require("express");
const router = new express.Router();
require("../Databases/dbConnect");
const userDetail = require("../Databases/kissanDetail");

router.post("/api/register",async (req,res)=>{
    try{
        const fetchedUserDetail = new userDetail({
            firstName : req.body.firstName[0],
            lastName : req.body.lastName[0],
            email : req.body.email[0],
            password : req.body.password[0]
        })
        fetchedUserDetail.save();
        res.send("data recieved successfully");
        console.log(req.body.email[0]);
    }
    catch(e){
        console.log(e);
    }
})

router.post("/api/test",async (req,res)=>{
    try{
        console.log(req.body);
        res.send("data recieved successfully");
    }
    catch(e){
        console.log(e);
    }
})

module.exports = router;
