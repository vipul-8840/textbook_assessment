const express = require("express");
const bcrypt = require("bcrypt")
const dotenv = require("dotenv");
const userModel = require("./db");
const mongoose =  require("mongoose")

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); 

app.post("/signin", async(req, res) => 
{


  try{
      const {email,username,password,} = req.body
    
    if(!email ||!password || !username)
    {
      return res.status(400).json({
         mssg:"Email, password & username are required"
      });
    }
  
    const hashedPassword = await bcrypt.hash(password,5);
   await  userModel.create({
      email,
      username,
      password:hashedPassword 
    })
   res.status(200).json({
      mssg:"Account created successfully"
    })
 

  }
  catch(err){

    res.status(500).json(
      { message: "Internal server error" ,
        error :  err.message
      })
  } 

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:5000`);
});
