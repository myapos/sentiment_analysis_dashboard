import customFetch from "utils/customFetch";
import environment from "environment";

const fetchTweets = async (term) => {
  const env = environment();
  const url = `${env.BASE_URL}/tweets?query=${window.encodeURIComponent(term)}`;

  return customFetch(url);
};

export default fetchTweets;
