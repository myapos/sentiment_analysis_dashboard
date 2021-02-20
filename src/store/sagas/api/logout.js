import customFetch from "utils/customFetch";

const login = async () => {
  const url = "http://localhost:8585/logout";

  const res = await customFetch(url);
  return res;
};

export default login;
