/* It will detect the environment and return any related environment variable */
const environment = () => {
  const env = {};

  if (process.env.REACT_APP_ENVIRONMENT === "development") {
    env.PORT = "8585";
    env.BASE_URL = `http://localhost:${env.PORT}`;
  } else {
    // production environment
    env.BASE_URL = `https://sentimental-analysis-server.herokuapp.com`;
  }

  console.log(
    "process.env.REACT_APP_ENVIRONMENT",
    process.env.REACT_APP_ENVIRONMENT,
    "env",
    env
  );

  return {
    ...env,
  };
};

export default environment;
