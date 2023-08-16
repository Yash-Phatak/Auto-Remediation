const express=require("express");
const cors = require("cors");

const app=express();

const corsOptions = {
    origin: "http://localhost:3000/" // frontend URI (ReactJS)
}
app.use(cors(corsOptions));

app.get('/', (req,res)=>{
    res.send("Working");
})

app.listen(5000, ()=>{
    console.log("Backend is running on 5000");
})