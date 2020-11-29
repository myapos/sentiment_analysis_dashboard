import customFetch from "../utils/customFetch";

const fetchTweets = async (term) => {
  try {
    console.log("term", term);
    // const url = "http://localhost:8585/check";
    const url = "http://localhost:8585/login/callTwitter";
    // return (window.location.href = url);
  } catch (e) {
    console.error("error:", e);
  }
};

export default fetchTweets;
