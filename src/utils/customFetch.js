const customFetch = async (url) => {
  const fetched = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  });

  const result = fetched.json();

  return result;
};

export default customFetch;
