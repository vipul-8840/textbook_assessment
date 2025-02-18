const express = require("express");
const bcrypt = require("bcrypt")
const dotenv = require("dotenv");
const {userModel,courseModel} = require("./db");
const mongoose =  require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require ("cors");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET= process.env.JWT_SECRET;
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); 
app.use(cors);

app.post("/signup", async(req, res) => 
{
  try{
      const {email,username,password,} = req.body
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

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // if (!email || !password) {
    //   return res.status(400).json({
    //     msg: "Email & password are required",
    //   });
    // }

   const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Email not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({
        msg: "Invalid password",
      });
    }
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1h", 
    });

  
    res.cookie("auth_token", token, {
      httpOnly: true, 
      maxAge: 3600000, 
    });

    res.status(200).json({
      msg: "Signed in successfully",
      token: token, 
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses", error: err.message });
  }
});

app.get("/course/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: "Error fetching course", error: err.message });
  }
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:5000`);
});
