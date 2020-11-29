import customFetch from "../utils/customFetch";

const login = async () => {
  try {
    // const url = "http://localhost:8585/check";
    const url = "http://localhost:8585/login/facebook";

    return (window.location.href = url);
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
