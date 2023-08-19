require('dotenv').config()
const express=require("express");
const cors = require("cors");
const Mssg = require("./configfb");


const app=express();
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(cors(corsOptions));

app.get('/', (req,res)=>{
    res.send("Working");
})

app.post('/chat', async (req,res)=>{
    const chat = req.body;
    try{
        await Mssg.add(chat)
        .then(res.send({success:"true"}));
    }catch(err){
        console.log(err);
    }
    
})

app.listen(5000, ()=>{
    console.log("Backend is running on 5000");
})