const express = require("express");

const launchesRouter = express.Router();

const {
  httpgGetAllLaunches,
  httpPostNewLaunch,
  httpAbortLaunch,
} = require("./launches.controller");

launchesRouter.get("/", httpgGetAllLaunches);
launchesRouter.post("/", httpPostNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
