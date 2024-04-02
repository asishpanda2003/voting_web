const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology : true,
})
// .then(()=>console.log("connectinon Established"))

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connection Established")
})

db.on('error',(err)=>{
    console.error("Connectino Error",err)
})
db.on('disconnected',()=>{
    console.log("Connectino Established")
})


module.exports=db;