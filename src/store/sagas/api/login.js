import { SOCIALS } from "common/socials";
import environment from "environment";
const login = async (social) => {
  try {
    const env = environment();

    console.log("env", env);
    const url = `${env.BASE_URL}/login/${SOCIALS[social]}`;

    return (window.location.href = url);
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
