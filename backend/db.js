
const mongoose = require ("mongoose")
const { Schema } = require("mongoose");


const userSchema = new Schema({
    email :{type:String,unique:"true",required:true, match: [/^\S+@\S+\.\S+$/, "Invalid email format"]},
   username : {type:String,unique:"true",required:true},
   password :{type:String,unique:"true",required:true},
})


const CourseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false }, 
  });
const userModel =mongoose.model ("User",userSchema);
const courseModel =  mongoose.model("courses", CourseSchema);
module.exports = {
    userModel,
    courseModel
};