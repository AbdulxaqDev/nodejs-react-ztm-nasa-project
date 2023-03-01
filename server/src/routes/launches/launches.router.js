const express = require("express");

const launchesRouter = express.Router();

const {
  httpgGetAllLaunches,
  httpPostNewLaunch,
} = require("./launches.controller");

launchesRouter.get("/", httpgGetAllLaunches);
launchesRouter.post("/", httpPostNewLaunch);

module.exports = launchesRouter;
