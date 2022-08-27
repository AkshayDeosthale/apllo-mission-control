const launches = new Map();

const launch = {
  flighNumber: 100,
  mission: "mission 1",
  rocket: "rocket 1",
  launchDate: new Date("31 May , 2030"),
  destination: "kepler 444b",
  customer: ["nasa", "akshay", "atharva"],
  upcoming: true,
  success: true,
};

launches.set(launch.flighNumber, launch);

module.exports = launches;
