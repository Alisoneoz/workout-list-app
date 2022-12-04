const express= require("express");
const { 
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
  } = require("../controller/workoutControllers");

//Express router instance
const router= express.Router()

//GET all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);


//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);


//exporting the module
module.exports= router; //different syntax for me... I would have done it like module.exports= {router:router} 
//pero vamo a ver como se va haciendo a medida que se añadan mas routes