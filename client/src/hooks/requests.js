import axios from "axios";
import config from "../config";

async function httpGetPlanets() {
  const res = await axios.get(`${config.api.URL}/planets`);

  return findPropFromObj(res, "planets");
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

const findPropFromObj = (object, key) => {
  if (object.hasOwnProperty(key)) {
    return object[key];
  }

  for (const k of Object.keys(object)) {
    if (typeof object[k] === "object") {
      const o = findPropFromObj(object[k], key);
      if (o !== null && typeof o !== "undefined") return o;
    }
  }

  return null;
};

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
  findPropFromObj,
};
