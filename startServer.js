const mongoose = require('mongoose');
var express= require('express')
var bp=require('body-parser')
var app= express()
app.use(bp.json())
module.exports.startServer=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/merndb');
    app.listen(4000,()=>{
        console.log('server is ready');
        
    })
 }