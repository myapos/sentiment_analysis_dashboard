import customFetch from "../utils/customFetch";

const login = async () => {
  try {
    // const url = "http://localhost:8585/check";
    // const url = "http://localhost:8585/login/facebook";
    // const res = await customFetch(url);

    // console.log("res", res);
    return (window.location.href = "http://localhost:8585/login/facebook");
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
