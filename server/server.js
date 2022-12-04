require("dotenv").config();
const express = require ("express");
const mongoose= require("mongoose");

//express app
const app = express();

//Routes importation
const workoutRoutes= require("./routes/workouts");

//Middleware
app.use(express.json());
app.use((req, res, next)=> {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //Listen for requests
    const PORT= process.env.PORT||5000;
    app.listen (PORT, ()=>{
    console.log(`Connected to DB & listening in port:${PORT}`)
    });
  })
  .catch((error)=>{
    console.log(error);
  })

