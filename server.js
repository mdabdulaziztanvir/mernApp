require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

MONGO_URI =
  "mongodb+srv://admin:zodiackiller1A@mernapp.ttz8r.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp";
PORT = 4000;
// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(PORT, () => {
      console.log("listening for requests on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
