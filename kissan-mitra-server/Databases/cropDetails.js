require ("dotenv").config();
const mongoose = require("mongoose");

const cropDetailSchema = new mongoose.Schema({
    user_id: String,
    land_id: String,
    cropName: string,
    fertiliser:{
        type: String,
        date:Date,
    },
    pesticide:{
        type: String,
        date:Date,
    },
    water:{
        type: String,
        date:Date,
    },
    cropstate:[
        {
            state:string,
            date: Date,
        },

    ],    
})

const cropDetailModel = new mongoose.model("cropDetail",cropDetailSchema);
module.exports = cropDetailModel;