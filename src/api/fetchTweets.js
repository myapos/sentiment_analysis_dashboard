import customFetch from "../utils/customFetch";

const fetchTweets = async (term) => {
  // const url = "http://localhost:8585/check";
  const url = `http://localhost:8585/tweets?query=${term}`;
  const res = await customFetch(url);

  return res;
};

export default fetchTweets;
