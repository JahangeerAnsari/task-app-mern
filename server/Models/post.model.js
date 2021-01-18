const mongoose = require('mongoose')
 const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    text:{
        type:String,
        required:true
    },
    postedBy:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User" 
    }
    

 }, {useFindAndModify: true})
 module.exports = mongoose.model("Post",postSchema)