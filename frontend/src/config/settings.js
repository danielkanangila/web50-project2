const settings = {
  dev: {
    apiUrl: "http://127.0.0.1:5000/api",
  },
  staging: {
    apiUrl: "http://127.0.0.1:5000/api",
  },
  prod: {
    apiUrl: "http://127.0.0.1:5000/api",
  },
};

const getCurrentSettings = () => {
  if (process.env.APP_ENV == "development") return settings.dev;
  else if (process.env.APP_ENV == "staging") return settings.staging;
  else return settings.prod;
};

export default getCurrentSettings();
