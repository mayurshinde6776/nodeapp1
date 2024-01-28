const mongoose = require('mongoose');
const empcrud = mongoose.model('empcrud', 
{ 
    name: String,
    email:String ,
    password: String,
    
});

module.exports=empcrud