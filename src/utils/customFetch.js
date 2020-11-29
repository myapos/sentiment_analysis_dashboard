const customFetch = async (url) => {
  const fetched = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await fetched.json();
};

export default customFetch;
