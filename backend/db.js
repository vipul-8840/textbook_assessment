
const mongoose = require ("mongoose")
const { Schema } = require("mongoose");


const userSchema = new Schema({
    email :{type:String,unique:"true",required:true, match: [/^\S+@\S+\.\S+$/, "Invalid email format"]},
   username : {type:String,unique:"true",required:true},
   password :{type:String,unique:"true",required:true},
})
const userModel =mongoose.model ("User",userSchema);
module.exports = userModel