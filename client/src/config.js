const dev = {
  api: {
    URL: "http://localhost:8080",
  },
};

const stage = {
  api: {
    URL: "https://api-staging.hireskill.io:10039/api/v1",
  },
};

const prod = {
  api: {
    URL: "",
  },
};

let config;
switch (process.env.REACT_APP_STAGE) {
  case "dev":
    config = dev;
    break;
  case "staging":
    config = stage;
    break;
  case "production":
    config = prod;
    break;
  default:
    config = dev;
    break;
}

export default config;
