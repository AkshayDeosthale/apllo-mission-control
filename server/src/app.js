const express = require("express");

const compression = require("compression");
const planetRouter = require("./routes/planets/planets.router");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));

//routes
app.use(planetRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
