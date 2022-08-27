const launches = require("../../model/launches.model");

function allLaunches(req, res) {
  console.log(launches);
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = { allLaunches };
