const express =require("express");
const app =express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const doctorRoutes=require('./routes/doctorRoutes')

app.use(bodyParser.json())

app.use('/',require('./routes/doctorRoutes'));

mongoose.connect('mongodb+srv://arun:123@cluster0.grch4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((result)=>{
    console.log("Connected to db");
    
})
.catch((err)=>{
    console.log("error connect db",err);
    
})

app.use('/api',doctorRoutes)

app.listen(4000,()=>{
    console.log('server running on the port:4000')
})