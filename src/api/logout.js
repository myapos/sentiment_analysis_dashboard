import customFetch from "../utils/customFetch";

const login = async () => {
  try {
    const url = "http://localhost:8585/logout";

    const res = await customFetch(url);
    return res;
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
