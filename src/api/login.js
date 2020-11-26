import customFetch from "../utils/customFetch";

const login = async () => {
  try {
    const url = "http://localhost:8585/check";
    const res = await customFetch(url);

    console.log("res", res);
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
