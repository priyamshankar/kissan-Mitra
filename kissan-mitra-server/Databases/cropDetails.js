require ("dotenv").config();
const mongoose = require("mongoose");

const cropDetailSchema = new mongoose.Schema({
    user_id: String,
    land_id: String,
    cropName: String,
    fertiliser:{
        typeofProd: String,
        date:Date,
        // date:String,
    },
    pesticide:{
        typeofProd: String,
        // date:String,
        date:Date,
    },
    water:{
        typeofProd: String,
        date:Date,
        // date:String,

    },
    cropstate:[
        {
            state:String,
            date: Date,
            // date:String,
        },

    ],    
})

const cropDetailModel = new mongoose.model("cropDetail",cropDetailSchema);
module.exports = cropDetailModel;