const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;


// app.get('/',(req,res)=>{
//     console.log("Welcome to our voting app");
// })

const userRoutes=require('./routes/userRoutes');
app.use('/user',userRoutes);

const candidateRoutes=require('./routes/candidateRoutes');
app.use('/candidate',candidateRoutes);


app.listen(PORT,()=>{
    console.log("Listening at 3000");
})