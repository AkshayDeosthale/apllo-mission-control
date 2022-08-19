const http = require("http");
const app = require("./app");
const { loadPlanetData } = require("./model/planets.model");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

async function startServer() {
  await loadPlanetData();

  const server = http.createServer(app).listen(PORT, () => {
    console.log("Server now listening on PORT", PORT);
  });
}

startServer();
