const express = require("express");
const { getAllPlanets } = require("./planets.controller");
const path = require("path");

const planetRouter = express.Router();

planetRouter.route("/planets").get(getAllPlanets);

module.exports = planetRouter;
