
var express= require('express')
var bp=require('body-parser')
const mongoose = require('mongoose');
const empcrud= require('./model')
var cors = require('cors')
var app= express()
app.use(bp.urlencoded({extended:true}))
// define schema

app.use(cors())

app.post('/adduser',(req,res)=>{
const users = new empcrud(
    { 
        ...req.body
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password
       
     });
     users.save().then(() => res.send('user added'));
     
})

app.get('/loadusers',async(req,res)=>{
   const users=await empcrud.find()
   return res.status(200).json(users)
})

app.get('/loadusers/:id',async(req,res)=>{
    const uid=req.params.id
    const user=await empcrud.findById(uid)
    return res.status(200).json(user)
 })

 app.delete('/deleteuser/:id',async(req,res)=>{
    const uid=req.params.id
    const user=await empcrud.findByIdAndDelete(uid)
    return res.status(200).json(user)
 })

 app.put('/updateuser/:id',async(req,res)=>{
    const uid=req.params.id
    await empcrud.updateOne({uid}, req.body)
    const updateuser=await empcrud.findById(uid)
    return res.status(200).json(updateuser)
 })

 const startServer=async()=>{
    await mongoose.connect(`mongodb+srv://admin:Sai%407887@mern-cluster.udrxc0h.mongodb.net/mernndb`);
    app.listen(4000,()=>{
        console.log('server is ready');
        
    })
 }

 startServer()
