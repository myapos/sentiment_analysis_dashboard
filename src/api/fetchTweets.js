import customFetch from "../utils/customFetch";

const fetchTweets = async (term) => {
  try {
    console.log("term", term);
    // const url = "http://localhost:8585/check";
    const url = `http://localhost:8585/tweets?query=${term}`;
    const res = await customFetch(url);
    return res;
  } catch (e) {
    console.error("error:", e);
  }
};

export default fetchTweets;
