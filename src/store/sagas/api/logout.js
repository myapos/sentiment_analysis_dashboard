import customFetch from "utils/customFetch";
import environment from "environment";
const login = async () => {
  const env = environment();

  const url = `${env.BASE_URL}/logout`;

  const res = await customFetch(url);

  return res;
};

export default login;
