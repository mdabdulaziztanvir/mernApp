const express = require("express");
const {
  allWorkouts,
  getWorkout,
  postWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
// all workouts
router.get("/", allWorkouts);
// singlw workout
router.get("/:id", getWorkout);

// post a workout
router.post("/", postWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
