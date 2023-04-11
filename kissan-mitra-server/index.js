const express =require("express");
const app=express();
const port=process.env.PORT ||5000;
const router=require("./routes/routes");
// const dbconnection=require("./database/dbConnection");
// const router=express.Router();
app.listen(port,()=>{
    console.log("localhost connected");
})

app.use(router);