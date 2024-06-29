const express = require("express");

//HEALTH CHECK ROUTE
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

const workoutsController = require ("./controllers/workoutsController")
app.use("/workouts", workoutsController)

module.exports = app;