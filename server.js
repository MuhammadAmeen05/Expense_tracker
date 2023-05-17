const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv')
const path=require('path')
const morgan=require('morgan')
const app=express();
const ConnectDB=require('./conn/db')
const port=process.env.PORT||5000;
app.use(express.json())
const transcations=require('./routes/transcations')
//console.log(transcations)
ConnectDB();
// if(process.env.NODE_ENV ==='development')
// {
//   app.use(morgan('dev'))
// }
app.use('/api/v1/transcations',transcations)

app.use(express.static(path.join(__dirname,'/client/build')))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'/client/build/index.html'))
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.yellow.bold)
  })