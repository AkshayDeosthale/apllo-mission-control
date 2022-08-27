const express = require("express");
const { allLaunches } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.route("/launches").get(allLaunches);

module.exports = launchesRouter;
