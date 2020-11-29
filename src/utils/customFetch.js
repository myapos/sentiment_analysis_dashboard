const customFetch = async (url) => {
  const fetched = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/html",
      "Content-Type": "application/html",
    },
    // withCredentials: true,
    // credentials: "same-origin",
    // credentials: "include",
    // mode: "cors",
    // cache: "no-cache",
    // body: {},
  });

  return fetched;
  // const result = fetched.json();

  // return result;
};

export default customFetch;
