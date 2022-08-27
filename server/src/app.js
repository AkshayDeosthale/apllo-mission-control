const express = require("express");

const compression = require("compression");
const planetRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

app.use(express.json());
app.use(compression());
app.use(cors());

//logging
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "..", "public")));

//routes
app.use(planetRouter);
app.use(launchesRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
