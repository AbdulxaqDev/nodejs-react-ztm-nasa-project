const express = require("express");

const launchesRouter = express.Router();

const { httpgGetAllLaunches } = require("./launches.controller");

launchesRouter.get("/launches", httpgGetAllLaunches);

module.exports = launchesRouter;
