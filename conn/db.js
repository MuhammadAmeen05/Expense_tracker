const mongoose = require('mongoose');
const dotenv=require('dotenv');
const colors=require('colors')
dotenv.config();
const ConnectDB= async ()=>{
try {
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`Database Connection is created ${conn.connection.host}`.cyan.underline.bold)
} catch (err) {
 console.log(`Error ${err.message}`.red.underline.bold)   
}
}

module.exports=ConnectDB;