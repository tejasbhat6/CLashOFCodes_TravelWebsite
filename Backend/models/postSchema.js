const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    cat:{
        type:String,
        // required:true,
    },
    
    date:{
        type:Date,
        
    },
    
  
})


const posts= mongoose.model('posts', postSchema);

module.exports =posts;

